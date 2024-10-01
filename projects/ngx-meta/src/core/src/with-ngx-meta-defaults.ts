import { MetadataValues } from './metadata-values'
import { coreFeature, CoreFeature, CoreFeatureKind } from './core-feature'
import { DEFAULTS } from './defaults'

/**
 * Sets up default metadata values.
 *
 * When setting metadata values for a page, default values will be used as
 * fallback when a metadata value isn't specified.
 *
 * @example
 *
 * <b>Using standalone, recommended API</b>
 * ```typescript
 * provideNgxMetaCore(
 *   withNgxMetaDefaults({title: 'Default title'})
 * )
 * ```
 *
 * <b>Using module-based API</b>
 * ```typescript
 * NgxMetaCoreModule.forRoot(
 *   withNgxMetaDefaults({title: 'Default title'})
 * )
 * ```
 *
 * See also:
 *
 * - {@link provideNgxMetaCore}: to use it with the standalone, recommended API.
 *
 * - {@link NgxMetaCoreModule.(forRoot:1)}: to use it with the module-based API.
 *
 * - {@link https://ngx-meta.dev/guides/defaults/ | Defaults guide}
 *
 * - {@link https://ngx-meta.dev/guides/metadata-values-json/ | Metadata values JSON guide}
 *
 * @param defaults - Default metadata values to use
 *
 * @public
 */
export const withNgxMetaDefaults = (
  defaults: MetadataValues,
): CoreFeature<CoreFeatureKind.Defaults> =>
  coreFeature(CoreFeatureKind.Defaults, [
    { provide: DEFAULTS, useValue: defaults },
  ])
