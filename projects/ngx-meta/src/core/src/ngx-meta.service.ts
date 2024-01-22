import { Inject, Injectable } from '@angular/core'
import { MetadataValues } from './metadata-values'
import { MetadataRegistry } from './metadata-registry'
import { METADATA_RESOLVER, MetadataResolver } from './metadata-resolver'

@Injectable({ providedIn: 'root' })
export class NgxMetaService {
  constructor(
    private readonly registry: MetadataRegistry,
    @Inject(METADATA_RESOLVER) private readonly resolver: MetadataResolver,
  ) {}

  public set(values: MetadataValues = {}): void {
    const allMetadata = this.registry.getAll()
    for (const metadata of allMetadata) {
      metadata.set(this.resolver(values, metadata.resolverOptions))
    }
  }
  public clear(): void {
    this.set()
  }
}
