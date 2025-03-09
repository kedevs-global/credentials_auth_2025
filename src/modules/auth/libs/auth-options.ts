import { NextAuthOptions } from 'next-auth'
import { credentialsProvider } from '../providers/credentials-provider'
import { jwtCallback } from '../callbacks/jwt-callback'
import { sessionCallback } from '../callbacks/session-callback'
import { redirectCallback } from '../callbacks/redirect-callback'

export const authOptions: NextAuthOptions = {
  providers: [credentialsProvider],
  /* eslint-disable */
  callbacks: {
    jwt: jwtCallback,
    session: sessionCallback,
    redirect: redirectCallback,
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/',
  },
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24,
  },
  jwt: {
    maxAge: 60 * 60 * 24,
  },
  /* eslint-enable */
}
