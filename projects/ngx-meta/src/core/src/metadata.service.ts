import { Injectable } from '@angular/core'
import { MetadataResolver } from './metadata-resolver'
import { MetadataValues } from './metadata-values'
import { RouteMetadataValues } from './route-metadata-values'
import { MetadataRegistry } from './metadata-registry'

@Injectable({ providedIn: 'root' })
export class MetadataService {
  constructor(
    private readonly registry: MetadataRegistry,
    private readonly resolver: MetadataResolver,
    private readonly routeValues: RouteMetadataValues,
  ) {}

  public set(values: MetadataValues = {}): void {
    const allMetadata = this.registry.getAll()
    for (const metadata of allMetadata) {
      metadata.set(this.resolver.get(metadata.definition, values))
    }
    this.routeValues.set(values)
  }
}
