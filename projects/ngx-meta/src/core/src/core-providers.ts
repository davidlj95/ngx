import { HEAD_ELEMENT_UPSERT_OR_REMOVE_PROVIDER } from './head-element-upsert-or-remove'
import { METADATA_RESOLVER_PROVIDER } from './metadata-resolver'
import { MetadataRegistry } from './metadata-registry'

export const CORE_PROVIDERS = [
  HEAD_ELEMENT_UPSERT_OR_REMOVE_PROVIDER,
  METADATA_RESOLVER_PROVIDER,
  MetadataRegistry,
]
