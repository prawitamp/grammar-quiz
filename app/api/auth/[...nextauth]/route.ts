import { handlers } from '@/lib/auth.config'

// Next.js 14 route handler hanya boleh export method HTTP (GET, POST, dll)
export const GET = handlers.GET
export const POST = handlers.POST
