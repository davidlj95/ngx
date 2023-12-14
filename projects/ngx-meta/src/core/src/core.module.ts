import { ModuleWithProviders, NgModule } from '@angular/core'
import { MetadataService } from './metadata.service'
import { DefaultsService } from './defaults.service'
import { MetadataSetter } from './metadata-setter'
import { MetadataValueFromValues } from './metadata-value-from-values'
import { DEFAULTS_TOKEN } from './defaults-token'
import { MetadataValues } from './metadata-values'
import { MetadataRegistry } from './metadata-registry'
import { MetaService } from './meta.service'

@NgModule({
  providers: [
    DefaultsService,
    MetaService,
    MetadataService,
    MetadataSetter,
    MetadataValueFromValues,
    MetadataRegistry,
  ],
})
export class CoreModule {
  static withDefaults(
    defaults: MetadataValues,
  ): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [{ provide: DEFAULTS_TOKEN, useValue: defaults }],
    }
  }
}
