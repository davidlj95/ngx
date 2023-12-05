import { Metadata } from './metadata'
import { MetadataDefinition } from './metadata-definition'
import { StringKeyOf } from './string-key-of'
import { GlobalMetadataKey } from './global-metadata-key'

export abstract class ScopedMetadata<
  ScopeValues,
  ScopeKey extends StringKeyOf<ScopeValues>,
  GlobalName extends string = GlobalMetadataKey,
> implements Metadata<ScopeValues[ScopeKey], ScopeKey, GlobalName>
{
  public readonly definition: MetadataDefinition<ScopeKey, GlobalName>

  protected constructor({
    name,
    scope,
    globalName,
  }: {
    name: ScopeKey
    scope: string
    globalName?: GlobalName
  }) {
    this.definition = new MetadataDefinition({
      name,
      scope,
      globalName,
    })
  }

  abstract set(value: ScopeValues[ScopeKey] | null): void
}
