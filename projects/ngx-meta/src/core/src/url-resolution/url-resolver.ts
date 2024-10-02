import { InjectionToken } from '@angular/core'
import { AngularRouterUrl } from './angular-router-url'
import { noOpUrlResolver } from './no-op-url-resolver'

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
  { factory: () => noOpUrlResolver },
)

/**
 * @internal
 */
export type _UrlResolver = (
  url: URL | string | undefined | null | AngularRouterUrl,
) => string | undefined | null
