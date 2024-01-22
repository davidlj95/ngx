import { Inject, Injectable, Optional } from '@angular/core'
import { Metadata } from './metadata'

@Injectable()
export class MetadataRegistry {
  private readonly byId = new Map<string, Metadata>()

  constructor(
    @Optional()
    @Inject(Metadata)
    injectedMetadata: ReadonlyArray<Metadata> | null,
  ) {
    injectedMetadata?.forEach((metadata) => this.register(metadata))
  }

  register(metadata: Metadata) {
    if (this.byId.has(metadata.id)) {
      return
    }
    this.byId.set(metadata.id, metadata)
  }

  getAll(): Iterable<Metadata> {
    return this.byId.values()
  }
}
