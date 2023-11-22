import { Inject, ModuleWithProviders, NgModule, Optional } from '@angular/core'
import { GeneralMetadataService } from './general-metadata.service'
import { HtmlLangAttributeService } from './html-lang-attribute/html-lang-attribute.service'
import { DefaultGeneralMetadataRouteStrategy } from './routing/default-general-metadata-route-strategy'
import { MetadataRouteStrategy } from '../routing/metadata-route-strategy'
import { GeneralMetadataAppliersService } from './general-metadata-appliers.service'
import { GeneralMetadataApplierService } from './general-metadata-applier.service'
import { GeneralMetadataRouteDataService } from './routing/general-metadata-route-data.service'
import { GeneralMetadataRouteStrategy } from './routing/general-metadata-route-strategy'
import { GeneralMetadata } from './general-metadata'
import { GENERAL_METADATA_DEFAULTS } from './general-metadata-defaults'
import { GENERAL_METADATA_DEFAULTS_TOKEN } from './general-metadata-defaults-token'
import { makeForRootGuard } from '../common/make-for-root-guard'
import { LinkRelCanonicalService } from './link-rel-canonical/link-rel-canonical.service'

const [FOR_ROOT_GUARD_TOKEN, FOR_ROOT_GUARD_PROVIDER] = makeForRootGuard(
  'GeneralMetadata',
  GeneralMetadataAppliersService,
)

@NgModule({
  providers: [
    GeneralMetadataService,
    GeneralMetadataApplierService,
    GeneralMetadataRouteDataService,
    LinkRelCanonicalService,
    HtmlLangAttributeService,
  ],
})
export class GeneralMetadataModule {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(@Optional() @Inject(FOR_ROOT_GUARD_TOKEN) guard: unknown) {}

  static forRoot(
    defaults: GeneralMetadata = GENERAL_METADATA_DEFAULTS,
  ): ModuleWithProviders<GeneralMetadataModule> {
    return {
      ngModule: GeneralMetadataModule,
      providers: [
        FOR_ROOT_GUARD_PROVIDER,
        GeneralMetadataAppliersService,
        {
          provide: GENERAL_METADATA_DEFAULTS_TOKEN,
          useValue: defaults,
        },
        {
          provide: GeneralMetadataRouteStrategy,
          useClass: DefaultGeneralMetadataRouteStrategy,
        },
        {
          provide: MetadataRouteStrategy,
          useExisting: GeneralMetadataRouteStrategy,
          multi: true,
        },
      ],
    }
  }
}
