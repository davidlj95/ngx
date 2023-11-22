import { Inject, Injectable, Optional } from '@angular/core'
import { GeneralMetadata } from './general-metadata'
import { _DefaultsService } from 'ngx-metadata/common'
import { GENERAL_METADATA_DEFAULTS_TOKEN } from './general-metadata-defaults-token'
import { GeneralMetadataApplierService } from './general-metadata-applier.service'

@Injectable()
export class GeneralMetadataService {
  constructor(
    private readonly defaultsService: _DefaultsService,
    @Optional()
    @Inject(GENERAL_METADATA_DEFAULTS_TOKEN)
    private readonly defaults: GeneralMetadata | null,
    private readonly applierService: GeneralMetadataApplierService,
  ) {}

  public apply(metadata: GeneralMetadata) {
    this.applierService.apply(
      this.defaults !== null
        ? this.defaultsService.resolve(metadata, this.defaults)
        : metadata,
    )
  }
}
