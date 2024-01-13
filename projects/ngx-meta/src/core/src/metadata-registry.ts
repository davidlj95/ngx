import { Inject, Injectable, Optional } from '@angular/core'
import { MetadataProvider } from './metadata-provider'

@Injectable({ providedIn: 'root' })
export class MetadataRegistry {
  private readonly byId = new Map<string, MetadataProvider<unknown>>()

  constructor(
    @Optional()
    @Inject(MetadataProvider)
    private readonly injectedMetadata: ReadonlyArray<
      MetadataProvider<unknown>
    > | null,
  ) {
    this.injectedMetadata?.forEach((metadata) => this.register(metadata))
  }

  register(metadata: MetadataProvider<unknown>) {
    if (this.byId.has(metadata.metadata.id)) {
      return
    }
    this.byId.set(metadata.metadata.id, metadata)
  }

  getAll(): Iterable<MetadataProvider<unknown>> {
    return this.byId.values()
  }
}
