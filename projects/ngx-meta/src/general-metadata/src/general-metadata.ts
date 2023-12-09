import { GeneralMetadataImage } from './general-metadata-image'

export interface GeneralMetadata {
  readonly title?: string | null
  readonly description?: string | null
  readonly author?: string | null
  readonly keywords?: ReadonlyArray<string> | null
  readonly generator?: boolean | null
  readonly applicationName?: string | null
  readonly canonicalUrl?: URL | string | null
  readonly locale?: string | null
  readonly image?: GeneralMetadataImage
}
