import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core'
import { CoreFeatures, providersFromCoreFeatures } from './core-feature'

/**
 * Provides `ngx-meta`'s core library services.
 *
 * @remarks
 *
 * This is the standalone, recommended API. Using this API is preferred.
 * However, you may also use {@link NgxMetaCoreModule.(forRoot:1)} as the Angular module-based equivalent API.
 *
 * Configures also extra features:
 *
 * - {@link withNgxMetaDefaults}
 *
 * @param features - Features to configure
 *
 * @public
 */
export const provideNgxMetaCore = (
  ...features: CoreFeatures
): EnvironmentProviders =>
  makeEnvironmentProviders([...providersFromCoreFeatures(features)])
