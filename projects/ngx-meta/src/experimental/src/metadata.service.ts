import { Inject, Injectable, Optional } from '@angular/core'
import { Metadata } from './metadata'
import { MetadataSetter } from './metadata-setter'
import { MetadataValues } from './metadata-values'

@Injectable()
export class MetadataService {
  constructor(
    @Optional()
    @Inject(Metadata)
    private readonly metadata: ReadonlyArray<Metadata<unknown>> | null,
    private readonly metadataSetter: MetadataSetter,
  ) {}

  public set(values: MetadataValues = {}): void {
    const metadata = this.metadata ?? []
    metadata.forEach((metadata) => this.metadataSetter.set(metadata, values))
  }
}
