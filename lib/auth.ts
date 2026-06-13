import { hash, compare } from 'bcryptjs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * Hash password untuk keamanan
 */
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10
  return hash(password, saltRounds)
}

/**
 * Verify password saat login
 */
export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return compare(password, hashedPassword)
}

/**
 * Cari user berdasarkan email
 */
export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({
    where: { email: email.toLowerCase() },
  })
}

/**
 * Create user baru
 */
export async function createUser(email: string, password: string, name: string) {
  const hashedPassword = await hashPassword(password)

  return prisma.user.create({
    data: {
      email: email.toLowerCase(),
      password: hashedPassword,
      name,
    },
  })
}

/**
 * Update user session (untuk tracking login)
 */
export async function updateUserLastLogin(userId: string) {
  return prisma.user.update({
    where: { id: userId },
    data: { updatedAt: new Date() },
  })
}
