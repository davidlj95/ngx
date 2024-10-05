import { ModuleWithProviders, NgModule } from '@angular/core'
import { MetadataValues } from '../service'
import { withNgxMetaDefaults } from '../defaults'
import {
  CoreFeature,
  CoreFeatureKind,
  CoreFeatures,
  isCoreFeature,
} from './core-feature'
import { provideNgxMetaCore } from './provide-ngx-meta-core'

/**
 * Provides `ngx-meta`'s core library services.
 *
 * Check out {@link provideNgxMetaCore} for the standalone, recommended API.
 *
 * Use {@link NgxMetaCoreModule.(forRoot:1)} method. Importing the module alone does nothing.
 *
 * @public
 */
@NgModule()
export class NgxMetaCoreModule {
  /**
   * Provides `ngx-meta`'s core library services.
   *
   * Check out {@link provideNgxMetaCore} for the standalone, recommended API.
   *
   * Configures also extra features:
   *
   *  - {@link withNgxMetaDefaults}
   *
   *  - {@link withNgxMetaBaseUrl}
   *
   * Previous features configuration with an options object has been deprecated.
   * See {@link NgxMetaCoreModule.(forRoot:2)} for more information and how to migrate.
   *
   * @param features - Features to configure the core module with
   */
  static forRoot(
    ...features: CoreFeatures
  ): ModuleWithProviders<NgxMetaCoreModule>

  /**
   * Deprecated way of configuring the core module features.
   *
   * Check out {@link provideNgxMetaCore} for the standalone, recommended API.
   *
   * Otherwise, to keep using module-based APIs, keep reading.
   *
   * This way of configuring options doesn't allow tree shaking unneeded features.
   * So usage is discouraged and deprecated.
   * See deprecation notice in API docs details for the tree-shaking friendly alternative
   * Check out the example below for a migration example
   *
   * @deprecated Use {@link NgxMetaCoreModule.(forRoot:1)} for a module-based API with feature APIs as arguments instead.
   *             Even better, use {@link provideNgxMetaCore} for the standalone, recommended API.
   *
   * @example
   * ```typescript
   * NgxMetaCoreModule.forRoot({defaults: {title: 'Default title'}})
   * ```
   *
   * should be migrated to
   *
   * ```typescript
   * NgxMetaCoreModule.forRoot(withNgxMetaDefaults({title: 'Default title'}))
   * ```
   */
  // noinspection JSDeprecatedSymbols
  static forRoot(
    options: NgxMetaCoreModuleForRootOptions,
  ): ModuleWithProviders<NgxMetaCoreModule>

  // noinspection JSDeprecatedSymbols
  static forRoot(
    optionsOrFeature:
      | NgxMetaCoreModuleForRootOptions
      | CoreFeature<CoreFeatureKind> = {},
    ...features: CoreFeatures
  ): ModuleWithProviders<NgxMetaCoreModule> {
    const optionFeaturesOrFirstFeature = isCoreFeature(optionsOrFeature)
      ? [optionsOrFeature]
      : optionsOrFeature.defaults
        ? [withNgxMetaDefaults(optionsOrFeature.defaults)]
        : []
    return {
      ngModule: NgxMetaCoreModule,
      providers: [
        provideNgxMetaCore(...optionFeaturesOrFirstFeature, ...features),
      ],
    }
  }
}

/**
 * Configuration options for {@link NgxMetaCoreModule.(forRoot:2)}
 *
 * @deprecated Use {@link NgxMetaCoreModule.(forRoot:1)} with feature APIs as arguments instead.
 *             Or even better, use the {@link provideNgxMetaCore} standalone, recommended API.
 *             See {@link NgxMetaCoreModule.(forRoot:2)} for a migration example
 * @public
 */
export interface NgxMetaCoreModuleForRootOptions {
  /**
   * See {@link withNgxMetaDefaults}
   */
  defaults?: MetadataValues
}
