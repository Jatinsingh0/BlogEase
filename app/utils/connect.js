import { PrismaClient } from "@prisma/client"

let prisma

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  // Development environment
  prisma = new PrismaClient()
}

export default prisma
