import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import { neonConfig } from '@neondatabase/serverless'

// Neon config untuk serverless (Netlify)
// poolQueryViaFetch = true: pake HTTP biar gak perlu WebSocket
neonConfig.poolQueryViaFetch = true

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

/**
 * Prisma Client singleton dengan Neon serverless adapter.
 * - Pake HTTP/Fetch (gak perlu native binary / WebSocket) → cocok buat Netlify
 * - Koneksi aman di serverless karena gak perlu binary engine
 */
export const prisma =
  globalForPrisma.prisma ??
  (() => {
    const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL || '' })
    return new PrismaClient({
      adapter,
      log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    })
  })()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
