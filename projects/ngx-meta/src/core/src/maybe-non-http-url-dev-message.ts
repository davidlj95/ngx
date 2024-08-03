/**
 * Logs an error message about a URL not being HTTP or HTTPs
 *
 * Useful to warn developers about some metadata that requires absolute HTTP
 * or HTTPs URLs
 *
 * MUST be used with `ngDevMode` so that this message only runs in development
 *
 * @internal
 */
export const _maybeNonHttpUrlDevMessage = (
  url?: string | URL,
  opts: { module?: string; property?: string; link?: string } = {},
) => {
  const urlStr = url?.toString()
  if (!urlStr || urlStr.startsWith('http') || urlStr.startsWith('https')) {
    return
  }
  const moduleStr = opts.module ? `/${opts.module}` : ''
  const propertyStr = opts.property ? `${opts.property} ` : ''
  const linkStr = opts.link ? `For more information, see ${opts.link}` : ''
  console.error(
    `ngx-meta${moduleStr}: ${propertyStr}URL must use either http or https.\n` +
      ` -> Invalid ${propertyStr}URL: ${urlStr}\n${linkStr}`,
  )
}
