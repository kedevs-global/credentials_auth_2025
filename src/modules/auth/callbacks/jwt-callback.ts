/* eslint-disable */

export const jwtCallback = async ({ token, user }: any) => {
  if (user) {
    const { password, createdAt, updatedAt, ...userData } = user
    token.user = userData
  }
  return token
}
