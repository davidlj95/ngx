import { Injectable } from '@angular/core'
import { MetadataSetter } from './metadata-setter'
import { MetadataValues } from './metadata-values'
import { RouteMetadataValues } from './route-metadata-values'
import { MetadataRegistry } from './metadata-registry'

@Injectable({ providedIn: 'root' })
export class MetadataService {
  constructor(
    private readonly registry: MetadataRegistry,
    private readonly setter: MetadataSetter,
    private readonly routeMetadataValues: RouteMetadataValues,
  ) {}

  public set(values: MetadataValues = {}): void {
    const allMetadata = this.registry.getAll()
    for (const metadata of allMetadata) {
      this.setter.set(metadata, values)
    }
    this.routeMetadataValues.set(values)
  }
}
