import { Inject, Injectable } from '@angular/core'
import { MetadataValues } from './metadata-values'
import { RouteMetadataValues } from './route-metadata-values'
import { MetadataRegistry } from './metadata-registry'
import { METADATA_RESOLVER, MetadataResolverType } from './metadata-resolver'

@Injectable({ providedIn: 'root' })
export class MetadataService {
  constructor(
    private readonly registry: MetadataRegistry,
    @Inject(METADATA_RESOLVER) private readonly resolver: MetadataResolverType,
    private readonly routeValues: RouteMetadataValues,
  ) {}

  public set(values: MetadataValues = {}): void {
    const allMetadata = this.registry.getAll()
    for (const metadata of allMetadata) {
      metadata.set(this.resolver(metadata.metadata, values))
    }
    this.routeValues.set(values)
  }
}
