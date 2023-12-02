import { ScopedMetadata } from './scoped-metadata'
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
    globalName?: string
  }) {
    super({ name, scope: SCOPE, globalName })
  }
}
