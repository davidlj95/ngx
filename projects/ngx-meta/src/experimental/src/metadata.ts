import { MetadataDefinition } from './metadata-definition'

export abstract class Metadata<
  Value,
  Name extends string = string,
  GlobalName extends string = string,
> {
  abstract readonly definition: MetadataDefinition<Name, GlobalName>
  abstract set(value: Value | null): void
}
