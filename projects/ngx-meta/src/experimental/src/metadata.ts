import { MetadataDefinition } from './metadata-definition'

export abstract class Metadata<T> {
  abstract readonly definition: MetadataDefinition
  abstract set(value: T | null): void
}
