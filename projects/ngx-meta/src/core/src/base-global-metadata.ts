import { BaseMetadata } from './base-metadata'
import { GlobalMetadataDefinition } from './global-metadata-definition'
import { GlobalMetadata } from './global-metadata'
import { StringKeyOf } from './string-key-of'

export abstract class BaseGlobalMetadata<
  Global extends StringKeyOf<Globals>,
  Globals extends object = GlobalMetadata,
> extends BaseMetadata<Globals[Global], Global> {
  protected constructor(
    ...args: ConstructorParameters<
      typeof GlobalMetadataDefinition<StringKeyOf<Globals>>
    >
  ) {
    super(new GlobalMetadataDefinition(...args))
  }
}
