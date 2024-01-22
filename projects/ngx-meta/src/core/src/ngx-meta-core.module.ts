import { ModuleWithProviders, NgModule } from '@angular/core'
import { MetadataValues } from './metadata-values'
import { withNgxMetaDefaults } from './provide-ngx-meta-core'
import { CORE_PROVIDERS } from './core-providers'

@NgModule()
export class NgxMetaCoreModule {
  static forRoot(
    options: NgxMetaCoreModuleForRootOptions = {},
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

export interface NgxMetaCoreModuleForRootOptions {
  defaults?: MetadataValues
}
