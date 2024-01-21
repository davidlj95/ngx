import { Inject, Injectable, Optional } from '@angular/core'
import { MetadataProvider } from './metadata-provider'

@Injectable()
export class MetadataRegistry {
  private readonly byId = new Map<string, MetadataProvider<unknown>>()

  constructor(
    @Optional()
    @Inject(MetadataProvider)
    private readonly providers: ReadonlyArray<MetadataProvider<unknown>> | null,
  ) {
    this.providers?.forEach((metadata) => this.register(metadata))
  }

  register(provider: MetadataProvider<unknown>) {
    if (this.byId.has(provider.id)) {
      return
    }
    this.byId.set(provider.id, provider)
  }

  getAll(): Iterable<MetadataProvider<unknown>> {
    return this.byId.values()
  }
}
