/**
 * Indicate Angular's router URL shall be used to set the page's URL as a
 * metadata value.
 *
 * Needs {@link https://ngx-meta.dev/guides/url-resolution/ | URL resolution}
 * feature enabled for the feature to work
 *
 * A type alias exists to avoid using `typeof` around {@link AngularRouterUrl}
 *
 * @public
 */
export const ANGULAR_ROUTER_URL = Symbol(
  ngDevMode
    ? "NgxMeta: Use Angular's router URL as relative URL"
    : 'NgxMetaARU',
)

/**
 * Type alias for {@link ANGULAR_ROUTER_URL} symbol
 *
 * @public
 */
export type AngularRouterUrl = typeof ANGULAR_ROUTER_URL
