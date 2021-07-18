import UrlPattern from 'url-pattern'

function generateUrl(urlString: string, params = {}, query?: Record<string, unknown>): string {
  const url = new UrlPattern(urlString).stringify(params)

  if (typeof query === 'object') {
    const queryString = Object.entries(query)
      .filter(([, val]) => {
        if (
          val === null ||
          val === undefined ||
          val === '' ||
          (val instanceof Array && val.length < 1)
        ) {
          return false
        }
        return true
      })
      .map(([key, val]) => `${key}=${val}`)
      .join('&')

    return `${url}?${queryString}`
  }
  return url
}

export default generateUrl
