import { Inject, Injectable } from '@angular/core'
import { Metadata } from './metadata'
import { MetadataSetter } from './metadata-setter'

@Injectable()
export class MetadataService {
  constructor(
    @Inject(Metadata)
    private readonly metadata: ReadonlyArray<Metadata<unknown>>,
    private readonly metadataSetter: MetadataSetter,
  ) {}

  public set(values: object = {}): void {
    this.metadata.forEach((metadata) =>
      this.metadataSetter.set(metadata, values),
    )
  }
}
