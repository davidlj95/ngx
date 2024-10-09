import { AngularRouterUrl } from './angular-router-url'
import { noOpUrlResolver } from './no-op-url-resolver'
import { _LazyInjectionToken, _makeInjectionToken } from '../utils'

/**
 * Resolves relative URLs into absolute URLs if a base URL was provided.
 * Otherwise, acts as a no-op and returns the input as is.
 *
 * Absolute URLs, nulls and undefined are also returned as is.
 *
 * @internal
 */
export const _urlResolver: _LazyInjectionToken<_UrlResolver> = () =>
  _makeInjectionToken(ngDevMode ? 'URL Resolver' : 'UR', () => noOpUrlResolver)

/**
 * @internal
 */
export type _UrlResolver = (
  url: URL | string | undefined | null | AngularRouterUrl,
) => string | undefined | null
