import { MetadataDefinition } from './metadata-definition'

export abstract class Metadata<Value, Global extends string = string> {
  abstract readonly definition: MetadataDefinition<Global>
  abstract set(value: Value | null): void
}
