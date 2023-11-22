import { Inject, Injectable, Optional } from '@angular/core'
import { OpenGraph } from './open-graph'
import { OpenGraphApplierService } from './open-graph-applier.service'
import { OPEN_GRAPH_DEFAULTS_TOKEN } from './open-graph-defaults-token'
import { MetadataApplier } from '../common/metadata-applier'
import { DefaultsService } from '../common/defaults.service'

@Injectable()
export class OpenGraphService implements MetadataApplier<OpenGraph> {
  constructor(
    private readonly applierService: OpenGraphApplierService,
    @Optional()
    @Inject(OPEN_GRAPH_DEFAULTS_TOKEN)
    private readonly defaults: OpenGraph | null,
    private readonly defaultsService: DefaultsService,
  ) {}

  apply(metadata: OpenGraph) {
    this.applierService.apply(
      this.defaults
        ? this.defaultsService.resolve(metadata, this.defaults)
        : metadata,
    )
  }
}
