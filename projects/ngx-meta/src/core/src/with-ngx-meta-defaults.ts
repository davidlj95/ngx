import { MetadataValues } from './metadata-values'
import { __coreFeature, __CoreFeature, __CoreFeatureKind } from './core-feature'
import { DEFAULTS_TOKEN } from './defaults-token'

/**
 * Sets up default metadata values.
 *
 * When setting metadata values for a page, default values will be used as
 * fallback when a metadata value isn't specified.
 *
 * See also:
 *
 * - {@link provideNgxMetaCore} to use it with standalone APIs
 *
 * - {@link NgxMetaCoreModule.(forRoot:1)} to use it with module based APIs
 *
 * - Defaults guide in {@link https://ngx-meta.dev/guides/defaults/}
 *
 * @param defaults - Default metadata values to use
 *
 * @public
 */
export const withNgxMetaDefaults = (
  defaults: MetadataValues,
): __CoreFeature<__CoreFeatureKind.Defaults> =>
  __coreFeature(__CoreFeatureKind.Defaults, [
    { provide: DEFAULTS_TOKEN, useValue: defaults },
  ])
