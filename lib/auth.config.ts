import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import { verifyPassword, getUserByEmail } from '@/lib/auth'

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/login',
    error: '/auth/login',
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'student@example.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email dan password harus diisi')
        }

        const user = await getUserByEmail(credentials.email as string)

        if (!user) {
          throw new Error('Email atau password salah')
        }

        const isPasswordValid = await verifyPassword(
          credentials.password as string,
          user.password
        )

        if (!isPasswordValid) {
          throw new Error('Email atau password salah')
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string

        // Fetch latest user data dari database
        const dbUser = await prisma.user.findUnique({
          where: { id: token.id as string },
          select: {
            id: true,
            email: true,
            name: true,
            totalXP: true,
            streak: true,
            accuracy: true,
            level: true,
          },
        })

        if (dbUser) {
          session.user = {
            ...session.user,
            ...dbUser,
          }
        }
      }
      return session
    },
  },
})
