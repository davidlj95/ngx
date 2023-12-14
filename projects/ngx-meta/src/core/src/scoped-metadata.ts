import { MetadataDefinition } from './metadata-definition'
import { StringKeyOf } from './string-key-of'
import { GlobalMetadataKey } from './global-metadata-key'
import { BaseMetadata } from './base-metadata'

export abstract class ScopedMetadata<
  ScopeValues,
  ScopeKey extends StringKeyOf<ScopeValues>,
  GlobalName extends string = GlobalMetadataKey,
> extends BaseMetadata<ScopeValues[ScopeKey], ScopeKey, GlobalName> {
  protected constructor({
    name,
    scope,
    globalName,
  }: {
    name: ScopeKey
    scope: string
    globalName?: GlobalName
  }) {
    super(
      new MetadataDefinition({
        name,
        scope,
        globalName,
      }),
    )
  }
}
