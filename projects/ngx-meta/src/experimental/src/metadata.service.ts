import { Inject, Injectable, Optional } from '@angular/core'
import { Metadata } from './metadata'
import { MetadataSetter } from './metadata-setter'
import { MetadataValues } from './metadata-values'
import { RouteMetadataValues } from './route-metadata-values'

@Injectable()
export class MetadataService {
  constructor(
    @Optional()
    @Inject(Metadata)
    private readonly metadata: ReadonlyArray<Metadata<unknown>> | null,
    private readonly metadataSetter: MetadataSetter,
    @Optional()
    private readonly routeMetadataValues: RouteMetadataValues | null,
  ) {}

  public set(values: MetadataValues = {}): void {
    const metadata = this.metadata ?? []
    metadata.forEach((metadata) => this.metadataSetter.set(metadata, values))
    this.routeMetadataValues?.set(values)
  }
}
