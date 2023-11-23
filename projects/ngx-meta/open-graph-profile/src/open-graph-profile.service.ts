import { Inject, Injectable, Optional } from '@angular/core'
import { OpenGraphProfile } from './open-graph-profile'
import { OpenGraphProfileApplierService } from './open-graph-profile-applier.service'
import { OPEN_GRAPH_PROFILE_DEFAULTS_TOKEN } from './open-graph-profile-defaults-token'
import { _DefaultsService, _MetadataApplier } from '@davidlj95/ngx-meta/common'

@Injectable()
export class OpenGraphProfileService
  implements _MetadataApplier<OpenGraphProfile>
{
  constructor(
    private readonly applierService: OpenGraphProfileApplierService,
    @Optional()
    @Inject(OPEN_GRAPH_PROFILE_DEFAULTS_TOKEN)
    private readonly defaults: OpenGraphProfile | null,
    private readonly defaultsService: _DefaultsService,
  ) {}

  apply(metadata: OpenGraphProfile) {
    this.applierService.apply(
      this.defaults
        ? this.defaultsService.resolve(metadata, this.defaults)
        : metadata,
    )
  }
}
