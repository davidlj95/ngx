import { BaseUrl } from './base-url'
import {
  coreFeature,
  CoreFeature,
  CoreFeatureKind,
} from '../providers/core-feature'
import { provideDefaultRelativeUrlResolver } from './default-relative-url-resolver'

/**
 * Provides a base URL to enable resolving relative URLs. Including relative
 * URLs provided by Angular's router.
 *
 * Metadata values requiring absolute URLs may accept relative URLs then.
 * Internally, the library will turn the relative URL into an absolute URL
 * using the base URL as prefix.
 *
 * The special value {@link ANGULAR_ROUTER_URL} can be used to query the
 * Angular's router URL to be used as relative URL. Which with the feature
 * enabled will be resolved into an absolute URL. Do not use the value if the
 * feature isn't enabled. Otherwise, an invalid URL may end up used as
 * metadata value.
 *
 * @example
 *
 * <b>Using standalone, recommended API</b>
 * ```typescript
 * provideNgxMetaCore(
 *   withNgxMetaBaseUrl('https://example.com')
 * )
 * ```
 *
 * <b>Using module-based API</b>
 * ```typescript
 * NgxMetaCoreModule.forRoot(
 *   withNgxMetaBaseUrl('https://example.com')
 * )
 * ```
 *
 * See also:
 *
 * - {@link provideNgxMetaCore}: to use it with the standalone, recommended API.
 *
 * - {@link NgxMetaCoreModule.(forRoot:1)}: to use it with the module-based API.
 *
 * - {@link https://ngx-meta.dev/guides/url-resolution/ | URL resolution guide}
 *
 *
 * @param baseUrl - Prefix URL to use when relative URLs are used in metadata
 * values where an absolute URL is preferred or required.
 *
 * @public
 */
export const withNgxMetaBaseUrl = (
  baseUrl: BaseUrl,
): CoreFeature<CoreFeatureKind.BaseUrl> =>
  coreFeature(CoreFeatureKind.BaseUrl, [
    provideDefaultRelativeUrlResolver(baseUrl),
  ])
