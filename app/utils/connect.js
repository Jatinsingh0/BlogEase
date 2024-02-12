import { PrismaClient } from "@prisma/client"

let prisma

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  prisma = new PrismaClient()
}

export default prisma
