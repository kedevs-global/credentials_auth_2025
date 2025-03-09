/* eslint-disable */

export const sessionCallback = async ({ session, token }: any) => {
  session.user = token.user
  return session
}
