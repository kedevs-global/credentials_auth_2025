import { User } from '@prisma/client'
//eslint-disable-next-line
import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: User
  }
}
