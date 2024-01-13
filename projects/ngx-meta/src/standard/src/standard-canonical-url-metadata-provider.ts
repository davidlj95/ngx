import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import { Standard } from './standard'
import { LinkRelCanonicalService } from './link-rel-canonical/link-rel-canonical.service'

const KEY: keyof Standard = 'canonicalUrl'

export const STANDARD_CANONICAL_URL_METADATA_PROVIDER =
  makeStandardMetadataProvider(KEY, {
    g: KEY,
    s: (linkRelCanonicalService: LinkRelCanonicalService) => (value) =>
      linkRelCanonicalService.set(value),
    d: [LinkRelCanonicalService],
  })
