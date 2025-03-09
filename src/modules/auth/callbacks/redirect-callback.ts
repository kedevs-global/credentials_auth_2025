export const redirectCallback = async ({
  url,
  baseUrl,
}: {
  url: string
  baseUrl: string
}) => {
  return url.startsWith(baseUrl) ? url : baseUrl
}
