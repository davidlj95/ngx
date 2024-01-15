import { ModuleWithProviders, NgModule } from '@angular/core'
import { MetadataValues } from './metadata-values'
import { CORE_PROVIDERS, withDefaults } from './provide-core'

@NgModule()
export class CoreModule {
  static forRoot(
    options: CoreModuleForRootOptions = {},
  ): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...CORE_PROVIDERS,
        ...(options.defaults !== undefined
          ? withDefaults(options.defaults)._providers
          : []),
      ],
    }
  }
}

export interface CoreModuleForRootOptions {
  defaults?: MetadataValues
}
