import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

/**
 * Prisma Client singleton dengan Neon serverless adapter.
 * - Pake HTTP (WebSocket gak aktif) → zero native binary
 * - Compatible dengan Netlify serverless functions
 */
export const prisma =
  globalForPrisma.prisma ??
  (() => {
    const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL || '' })
    return new PrismaClient({
      adapter,
      log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
    })
  })()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
