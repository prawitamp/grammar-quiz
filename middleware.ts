import { auth } from '@/lib/auth.config'
import { NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const secret = new TextEncoder().encode(process.env.NEXTAUTH_SECRET || '')

export async function middleware(request: NextRequest) {
  const protectedRoutes = ['/(protected)', '/api/protected']

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  )

  if (!isProtected) {
    return NextResponse.next()
  }

  const token = request.cookies.get('next-auth.session-token')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  try {
    await jwtVerify(token, secret)
    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }
}

export const config = {
  matcher: ['/((?!auth|api/auth|public|_next/static|_next/image|favicon.ico).*)'],
}
