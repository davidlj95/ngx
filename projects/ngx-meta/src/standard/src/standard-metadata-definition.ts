import { ScopedMetadataDefinition } from '@davidlj95/ngx-meta/core'
import { StandardMetadata } from './standard-metadata'

const SCOPE: keyof StandardMetadata = 'standard'

export class StandardMetadataDefinition extends ScopedMetadataDefinition {
  constructor(name: string, global?: string) {
    super(SCOPE, name, global)
  }
}
