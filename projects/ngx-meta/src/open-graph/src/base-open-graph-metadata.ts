import {
  GlobalMetadataKey,
  ScopedMetadata,
  StringKeyOf,
} from '@davidlj95/ngx-meta/core'
import { OpenGraphMetadataRouteData } from './open-graph-metadata-route-data'
import { OpenGraphMetadata } from './open-graph-metadata'

export const SCOPE: keyof OpenGraphMetadataRouteData['meta'] = 'openGraph'

export abstract class BaseOpenGraphMetadata<
  ScopeKey extends StringKeyOf<OpenGraphMetadata>,
> extends ScopedMetadata<OpenGraphMetadata, ScopeKey> {
  protected constructor(name: ScopeKey, global?: GlobalMetadataKey) {
    super(SCOPE, name, global)
  }
}
