import { Injectable } from '@angular/core'
import { BaseStandardMetadata } from './base-standard-metadata'
import { StandardMetadata } from './standard-metadata'
import { LinkRelCanonicalService } from './link-rel-canonical/link-rel-canonical.service'

@Injectable()
export class CanonicalUrlStandardMetadata extends BaseStandardMetadata<'canonicalUrl'> {
  constructor(
    private readonly linkRelCanonicalService: LinkRelCanonicalService,
  ) {
    super({ name: 'canonicalUrl', globalName: 'canonicalUrl' })
  }

  set(value: StandardMetadata['canonicalUrl']): void {
    this.linkRelCanonicalService.set(value)
  }
}
