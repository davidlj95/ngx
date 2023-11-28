import { Inject, Injectable, Optional } from '@angular/core'
import { OpenGraph } from './open-graph'
import { OpenGraphApplierService } from './open-graph-applier.service'
import { OPEN_GRAPH_DEFAULTS_TOKEN } from './open-graph-defaults-token'
import { _DefaultsService, _MetadataApplier } from '@davidlj95/ngx-meta/common'

@Injectable()
export class OpenGraphService implements _MetadataApplier<OpenGraph> {
  constructor(
    private readonly applierService: OpenGraphApplierService,
    @Optional()
    @Inject(OPEN_GRAPH_DEFAULTS_TOKEN)
    private readonly defaults: OpenGraph | null,
    private readonly defaultsService: _DefaultsService,
  ) {}

  apply(metadata: OpenGraph) {
    this.applierService.apply(
      this.defaults
        ? this.defaultsService.resolve(metadata, this.defaults)
        : metadata,
    )
  }
}
