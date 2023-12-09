import { GlobalMetadata, ScopedMetadata } from '@davidlj95/ngx-meta/core'
import { StandardMetadataValues } from './standard-metadata-values'

export const SCOPE = 'standard'

export abstract class StandardMetadata<
  K extends keyof StandardMetadataValues,
> extends ScopedMetadata<StandardMetadataValues, K> {
  protected constructor({
    name,
    globalName,
  }: {
    name: K
    globalName?: keyof GlobalMetadata
  }) {
    super({ name, scope: SCOPE, globalName })
  }
}
