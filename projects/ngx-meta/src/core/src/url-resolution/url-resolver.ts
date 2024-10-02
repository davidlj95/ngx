import { inject, InjectionToken } from '@angular/core'
import { AngularRouterUrl } from './angular-router-url'
import { RELATIVE_URL_RESOLVER } from './relative-url-resolver'

/**
 * Resolves relative URLs into absolute URLs if a base URL was provided.
 * Otherwise, acts as a no-op and returns the input as is.
 *
 * Absolute URLs, nulls and undefined are also returned as is.
 *
 * @internal
 */
export const _URL_RESOLVER = new InjectionToken<_UrlResolver>(
  ngDevMode ? 'NgxMeta URL Resolver' : 'NgxMetaUR',
  {
    factory: () => {
      const relativeUrlResolver = inject(RELATIVE_URL_RESOLVER)
      return (url) => {
        if (url === undefined || url === null) {
          return url
        }
        const urlString = url.toString()
        if (urlString.split('://').length > 1) {
          return urlString
        }
        return relativeUrlResolver(
          //👇 Due to previous `if` clause, it can't be a URL object anymore
          url as Exclude<typeof url, URL>,
        )
      }
    },
  },
)

/**
 * @internal
 */
export type _UrlResolver = (
  url: URL | string | undefined | null | AngularRouterUrl,
) => string | undefined | null
