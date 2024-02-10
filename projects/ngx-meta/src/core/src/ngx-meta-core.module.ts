import { ModuleWithProviders, NgModule } from '@angular/core'
import { MetadataValues } from './metadata-values'
import { withNgxMetaDefaults } from './provide-ngx-meta-core'
import { CORE_PROVIDERS } from './core-providers'

/**
 * Adds core providers of `ngx-meta` to the application.
 * Must use {@link NgxMetaCoreModule.forRoot} method.
 *
 * For standalone apps, use {@link provideNgxMetaCore} instead
 *
 * @public
 */
@NgModule()
export class NgxMetaCoreModule {
  /**
   * Provides the core library services
   *
   * Allows specifying some default metadata values
   *
   * @example
   *
   * You can set some defaults using the `options` argument
   * ```typescript
   * NgxMetaCoreModule.forRoot({defaults: {title: 'Default title'}})
   * ```
   *
   * @param options - Allows providing some default metadata values using `defaults`
   */
  static forRoot(
    options: {
      defaults?: MetadataValues
    } = {},
  ): ModuleWithProviders<NgxMetaCoreModule> {
    return {
      ngModule: NgxMetaCoreModule,
      providers: [
        ...CORE_PROVIDERS,
        ...(options.defaults !== undefined
          ? withNgxMetaDefaults(options.defaults)._providers
          : []),
      ],
    }
  }
}
