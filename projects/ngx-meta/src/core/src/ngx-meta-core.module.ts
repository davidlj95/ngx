import { ModuleWithProviders, NgModule } from '@angular/core'
import { MetadataValues } from './metadata-values'
import { withNgxMetaDefaults } from './provide-ngx-meta-core'
import { CORE_PROVIDERS } from './core-providers'

/**
 * Adds core providers of `ngx-meta` to the application.
 * Must use {@link NgxMetaCoreModule.forRoot} method.
 *
 * @public
 */
@NgModule()
export class NgxMetaCoreModule {
  /**
   * Provides the core `ngx-meta` providers
   *
   * Allows specifying some default metadata values
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
