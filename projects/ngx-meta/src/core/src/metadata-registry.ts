import { Inject, Injectable, Optional } from '@angular/core'
import { NgxMetaMetadata } from './ngx-meta-metadata'

@Injectable()
export class MetadataRegistry {
  private readonly byId = new Map<string, NgxMetaMetadata>()

  constructor(
    @Optional()
    @Inject(NgxMetaMetadata)
    injectedMetadata: ReadonlyArray<NgxMetaMetadata> | null,
  ) {
    injectedMetadata?.forEach((metadata) => this.register(metadata))
  }

  register(metadata: NgxMetaMetadata) {
    if (this.byId.has(metadata.id)) {
      return
    }
    this.byId.set(metadata.id, metadata)
  }

  getAll(): Iterable<NgxMetaMetadata> {
    return this.byId.values()
  }
}
