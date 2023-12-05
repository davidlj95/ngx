import { Inject, Injectable, Optional } from '@angular/core'
import { Metadata } from './metadata'

@Injectable()
export class MetadataRegistry {
  private readonly byId = new Map<string, Metadata<unknown>>()

  constructor(
    @Optional()
    @Inject(Metadata)
    private readonly injectedMetadata: ReadonlyArray<Metadata<unknown>> | null,
  ) {
    this.injectedMetadata?.forEach((metadata) => this.register(metadata))
  }

  register(metadata: Metadata<unknown>) {
    if (this.byId.has(metadata.definition.id)) {
      return
    }
    this.byId.set(metadata.definition.id, metadata)
  }

  getAll(): Iterable<Metadata<unknown>> {
    return this.byId.values()
  }
}
