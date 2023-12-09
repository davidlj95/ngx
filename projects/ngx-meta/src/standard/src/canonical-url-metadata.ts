import { Injectable } from '@angular/core'
import { StandardMetadata } from './standard-metadata'
import { StandardMetadataValues } from './standard-metadata-values'
import { LinkRelCanonicalService } from './link-rel-canonical/link-rel-canonical.service'

@Injectable()
export class CanonicalUrlMetadata extends StandardMetadata<'canonicalUrl'> {
  constructor(
    private readonly linkRelCanonicalService: LinkRelCanonicalService,
  ) {
    super({ name: 'canonicalUrl', globalName: 'canonicalUrl' })
  }

  set(value: StandardMetadataValues['canonicalUrl']): void {
    this.linkRelCanonicalService.set(value)
  }
}
