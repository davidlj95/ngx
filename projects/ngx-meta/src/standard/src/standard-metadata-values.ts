import { GlobalMetadata } from '@davidlj95/ngx-meta/core'

export interface StandardMetadataValues {
  title?: GlobalMetadata['title']
  description?: GlobalMetadata['description']
  author?: string | null
}
