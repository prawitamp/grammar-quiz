import { PrismaClient } from '@prisma/client'
import { PrismaNeonHTTP } from '@prisma/adapter-neon'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

/**
 * Prisma Client singleton dengan Neon HTTP adapter (zero native binary).
 * - Pure HTTP (gak perlu WebSocket atau native binary engine)
 * - Compatible dengan Netlify serverless functions
 */
export const prisma =
  globalForPrisma.prisma ??
  (() => {
    const adapter = new PrismaNeonHTTP(process.env.DATABASE_URL || '')
    return new PrismaClient({
      adapter,
      log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
    })
  })()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
