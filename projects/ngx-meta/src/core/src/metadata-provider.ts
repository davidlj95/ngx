import { Metadata } from './metadata'

export abstract class MetadataProvider<Value, Global extends string = string> {
  abstract readonly metadata: Metadata<Global>
  abstract set(value: Value | null): void
}
