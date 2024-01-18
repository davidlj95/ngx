import { Metadata } from './metadata'

export type MetadataSetter<T> = (value: T) => void

export abstract class MetadataProvider<Value, Global extends string = string> {
  abstract readonly metadata: Metadata<Global>
  abstract readonly set: MetadataSetter<Value>
}
