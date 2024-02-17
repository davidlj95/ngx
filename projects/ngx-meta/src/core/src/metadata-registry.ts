import { Inject, Injectable, Optional } from '@angular/core'
import { NgxMetaMetadataSetter } from './ngx-meta-metadata-setter'

/**
 * @internal
 */
@Injectable()
export class MetadataRegistry {
  private readonly byId = new Map<string, NgxMetaMetadataSetter>()

  constructor(
    @Optional()
    @Inject(NgxMetaMetadataSetter)
    setters: ReadonlyArray<NgxMetaMetadataSetter> | null,
  ) {
    setters?.forEach((metadata) => this.register(metadata))
  }

  register(setter: NgxMetaMetadataSetter) {
    if (this.byId.has(setter.id)) {
      return
    }
    this.byId.set(setter.id, setter)
  }

  getAll(): Iterable<NgxMetaMetadataSetter> {
    return this.byId.values()
  }
}
