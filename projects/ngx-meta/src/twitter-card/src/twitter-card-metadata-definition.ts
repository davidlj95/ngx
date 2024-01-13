import { ScopedMetadataDefinition } from '@davidlj95/ngx-meta/core'
import { TwitterCardMetadata } from './twitter-card-metadata'

const SCOPE: keyof TwitterCardMetadata = 'twitterCard'

export class TwitterCardMetadataDefinition extends ScopedMetadataDefinition {
  constructor(name: string, global?: string) {
    super(SCOPE, name, global)
  }
}
