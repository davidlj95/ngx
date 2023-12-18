import { StringKeyOf } from './string-key-of'
import { GlobalMetadataKey } from './global-metadata-key'
import { BaseMetadata } from './base-metadata'
import { ScopedMetadataDefinition } from './scoped-metadata-definition'

export abstract class BaseScopedMetadata<
  ScopeValues,
  ScopeKey extends StringKeyOf<ScopeValues>,
  Global extends string = GlobalMetadataKey,
> extends BaseMetadata<ScopeValues[ScopeKey], Global> {
  protected constructor(
    ...args: ConstructorParameters<
      typeof ScopedMetadataDefinition<string, ScopeKey, Global>
    >
  ) {
    super(new ScopedMetadataDefinition(...args))
  }
}
