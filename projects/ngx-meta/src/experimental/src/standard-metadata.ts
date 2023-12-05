import { ScopedMetadata } from './scoped-metadata'
import { StandardMetadataValues } from './standard-metadata-values'
import { GlobalMetadata } from './global-metadata'

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
