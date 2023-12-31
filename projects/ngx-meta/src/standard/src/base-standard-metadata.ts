import {
  BaseScopedMetadata,
  GlobalMetadataKey,
  StringKeyOf,
} from '@davidlj95/ngx-meta/core'
import { StandardMetadata } from './standard-metadata'
import { StandardMetadataRouteData } from './standard-metadata-route-data'

export const SCOPE: keyof StandardMetadataRouteData['meta'] = 'standard'

export abstract class BaseStandardMetadata<
  ScopeKey extends StringKeyOf<StandardMetadata>,
> extends BaseScopedMetadata<StandardMetadata, ScopeKey> {
  protected constructor(name: ScopeKey, global?: GlobalMetadataKey) {
    super(SCOPE, name, global)
  }
}
