import { Metadata } from './metadata'
import { MetadataDefinition } from './metadata-definition'

export abstract class BaseMetadata<
  Value,
  Name extends string = string,
  GlobalName extends string = string,
> extends Metadata<Value, Name, GlobalName> {
  protected constructor(
    public readonly definition: MetadataDefinition<Name, GlobalName>,
  ) {
    super()
  }
}
