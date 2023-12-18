import { Metadata } from './metadata'
import { MetadataDefinition } from './metadata-definition'

export abstract class BaseMetadata<
  Value,
  Global extends string = string,
> extends Metadata<Value, Global> {
  protected constructor(
    public readonly definition: MetadataDefinition<Global>,
  ) {
    super()
  }
}
