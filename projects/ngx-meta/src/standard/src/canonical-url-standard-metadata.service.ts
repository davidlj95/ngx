import { Injectable } from '@angular/core'
import { BaseStandardMetadata } from './base-standard-metadata'
import { StandardMetadata } from './standard-metadata'
import { LinkRelCanonicalService } from './link-rel-canonical/link-rel-canonical.service'

const KEY = 'canonicalUrl'

@Injectable()
export class CanonicalUrlStandardMetadata extends BaseStandardMetadata<
  typeof KEY
> {
  constructor(
    private readonly linkRelCanonicalService: LinkRelCanonicalService,
  ) {
    super(KEY, KEY)
  }

  set(value: StandardMetadata[typeof KEY]): void {
    this.linkRelCanonicalService.set(value)
  }
}
