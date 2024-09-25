import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core'
import { __CoreFeatures, __providersFromCoreFeatures } from './core-feature'
import { CORE_PROVIDERS } from './core-providers'

/**
 * Adds core services of the library to the application.
 *
 * For module-based apps, you may use {@link NgxMetaCoreModule.(forRoot:1)} instead.
 *
 * Configures also extra features. Keep reading to see some examples.
 *
 * @example
 * Default metadata values can be set up with {@link withNgxMetaDefaults}.
 *
 * ```typescript
 * provideNgxMetaCore(
 *   withNgxMetaDefaults({title: 'Default title'})
 * )
 * ```
 *
 * @see {@link withNgxMetaDefaults}
 * @see {@link https://ngx-meta.dev/guides/defaults/ | Defaults guide}
 *
 * @param features - Features to configure
 *
 * @public
 */
export const provideNgxMetaCore = (
  ...features: __CoreFeatures
): EnvironmentProviders =>
  makeEnvironmentProviders([
    ...CORE_PROVIDERS,
    ...__providersFromCoreFeatures(features),
  ])
