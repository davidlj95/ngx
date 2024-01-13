import { ScopedMetadataDefinition } from '@davidlj95/ngx-meta/core'
import { OpenGraphProfileMetadata } from './open-graph-profile-metadata'

export const OG_SCOPE: keyof OpenGraphProfileMetadata = 'openGraph'
const SCOPE: keyof OpenGraphProfileMetadata[typeof OG_SCOPE] = 'profile'

export class OpenGraphProfileMetadataDefinition extends ScopedMetadataDefinition {
  constructor(name: string, global?: string) {
    super(`${OG_SCOPE}.${SCOPE}`, name, global)
  }
}
