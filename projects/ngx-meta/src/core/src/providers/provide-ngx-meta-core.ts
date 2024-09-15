import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core'
import { CoreFeatures, providersFromCoreFeatures } from './core-feature'
import { provideNgxMetaService } from '../service/ngx-meta.service'
import { _NO_OP_RELATIVE_URL_RESOLVER_PROVIDER } from '../url-resolution/no-op-relative-url-resolver'

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
  makeEnvironmentProviders([
    provideNgxMetaService(),
    _NO_OP_RELATIVE_URL_RESOLVER_PROVIDER,
    providersFromCoreFeatures(features),
  ])
