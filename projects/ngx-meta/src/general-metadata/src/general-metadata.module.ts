import { Inject, ModuleWithProviders, NgModule, Optional } from '@angular/core'
import { GeneralMetadataService } from './general-metadata.service'
import { HtmlLangAttributeService } from './html-lang-attribute/html-lang-attribute.service'
import { DefaultGeneralMetadataRouteStrategy } from './routing/default-general-metadata-route-strategy'
import { GeneralMetadataAppliersService } from './general-metadata-appliers.service'
import { GeneralMetadataApplierService } from './general-metadata-applier.service'
import { GeneralMetadataRouteDataService } from './routing/general-metadata-route-data.service'
import { GeneralMetadataRouteStrategy } from './routing/general-metadata-route-strategy'
import { GeneralMetadata } from './general-metadata'
import { GENERAL_METADATA_DEFAULTS } from './general-metadata-defaults'
import { GENERAL_METADATA_DEFAULTS_TOKEN } from './general-metadata-defaults-token'
import { LinkRelCanonicalService } from './link-rel-canonical/link-rel-canonical.service'
import { _MetadataRouteStrategy } from '@davidlj95/ngx-meta/routing'
import { _makeForRootGuard } from '@davidlj95/ngx-meta/common'

const [FOR_ROOT_GUARD_TOKEN, FOR_ROOT_GUARD_PROVIDER] = _makeForRootGuard(
  'GeneralMetadata',
  GeneralMetadataAppliersService,
)

@NgModule({
  providers: [
    GeneralMetadataService,
    GeneralMetadataApplierService,
    GeneralMetadataAppliersService,
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
        {
          provide: GENERAL_METADATA_DEFAULTS_TOKEN,
          useValue: defaults,
        },
        {
          provide: GeneralMetadataRouteStrategy,
          useClass: DefaultGeneralMetadataRouteStrategy,
        },
        {
          provide: _MetadataRouteStrategy,
          useExisting: GeneralMetadataRouteStrategy,
          multi: true,
        },
      ],
    }
  }
}
