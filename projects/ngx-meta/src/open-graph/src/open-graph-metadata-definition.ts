import { ScopedMetadataDefinition } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetadata } from './open-graph-metadata'

const SCOPE: keyof OpenGraphMetadata = 'openGraph'

export class OpenGraphMetadataDefinition extends ScopedMetadataDefinition {
  constructor(name: string, global?: string) {
    super(SCOPE, name, global)
  }
}
