import { ModuleWithProviders, NgModule } from '@angular/core'
import { MetadataValues } from './metadata-values'
import { CORE_PROVIDERS } from './core-providers'
import { withNgxMetaDefaults } from './with-ngx-meta-defaults'
import {
  __CoreFeature,
  __CoreFeatureKind,
  __CoreFeatures,
  __providersFromCoreFeatures,
  isCoreFeature,
} from './core-feature'

/**
 * Provides `ngx-meta`'s core library services.
 *
 * Use {@link NgxMetaCoreModule.(forRoot:1)} method. Importing the module alone does nothing.
 *
 * For standalone apps, use {@link provideNgxMetaCore} instead.
 *
 * @public
 */
@NgModule()
export class NgxMetaCoreModule {
  /**
   * Provides `ngx-meta`'s core library services.
   *
   * Accepts optional features configuration. See examples for more info.
   *
   * Previous configuration of features with an options object has been deprecated.
   * See {@link NgxMetaCoreModule.(forRoot:2)} for more information and how to migrate
   *
   * @example
   * Default metadata values can be set up.
   *
   * ```typescript
   * NgxMetaCoreModule.forRoot(withNgxMetaDefaults({title: 'Default title'})
   * ```
   *
   * @see {@link withNgxMetaDefaults}
   * @see {@link https://ngx-meta.dev/guides/defaults/}
   *
   * @param features - Features to configure the core module with
   */
  static forRoot(
    ...features: __CoreFeatures
  ): ModuleWithProviders<NgxMetaCoreModule>

  /**
   * Deprecated way of configuring the core module features.
   *
   * This way of configuring options doesn't allow tree shaking unneeded features.
   * So usage is discouraged and deprecated.
   * See deprecation notice for the tree-shaking friendly alternative
   *
   * Checkout the method signature examples for an example on how to migrate to the recommended way
   *
   * @deprecated Use {@link NgxMetaCoreModule.(forRoot:1)} with feature APIs as arguments instead.
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
      | __CoreFeature<__CoreFeatureKind> = {},
    ...features: __CoreFeatures
  ): ModuleWithProviders<NgxMetaCoreModule> {
    const optionFeaturesOrFirstFeature = isCoreFeature(optionsOrFeature)
      ? [optionsOrFeature]
      : optionsOrFeature.defaults
        ? [withNgxMetaDefaults(optionsOrFeature.defaults)]
        : []
    return {
      ngModule: NgxMetaCoreModule,
      providers: [
        ...CORE_PROVIDERS,
        ...__providersFromCoreFeatures([
          ...optionFeaturesOrFirstFeature,
          ...features,
        ]),
      ],
    }
  }
}

/**
 * Configuration options for {@link NgxMetaCoreModule.(forRoot:2)}
 *
 * @deprecated Use {@link NgxMetaCoreModule.(forRoot:1)} with feature APIs as arguments instead.
 *             See {@link NgxMetaCoreModule.(forRoot:2)} for a migration example
 * @public
 */
export interface NgxMetaCoreModuleForRootOptions {
  /**
   * See {@link withNgxMetaDefaults}
   */
  defaults?: MetadataValues
}
