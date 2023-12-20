import { ModuleWithProviders, NgModule } from '@angular/core'
import { MetadataValues } from './metadata-values'
import { withDefaults } from './provide-core'

@NgModule()
export class CoreModule {
  static withDefaults(
    defaults: MetadataValues,
  ): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: withDefaults(defaults)._providers,
    }
  }
}
