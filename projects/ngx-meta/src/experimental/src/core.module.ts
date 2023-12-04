import { NgModule } from '@angular/core'
import { MetadataService } from './metadata.service'
import { DefaultsService } from './defaults.service'
import { MetadataSetter } from './metadata-setter'
import { MetadataValueGetter } from './metadata-value-getter'
import { NgModuleWithProviders } from 'ng-mocks'
import { DEFAULTS_TOKEN } from './defaults-token'
import { MetadataValues } from './metadata-values'

@NgModule({
  providers: [
    DefaultsService,
    MetadataService,
    MetadataSetter,
    MetadataValueGetter,
  ],
})
export class CoreModule {
  static withDefaults(defaults: MetadataValues): NgModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [{ provide: DEFAULTS_TOKEN, useValue: defaults }],
    }
  }
}
