export type MetadataSetter<T> = (value: T) => void
export interface MetadataResolverOptions {
  readonly jsonPath: ReadonlyArray<string>
  readonly global?: string
}

export abstract class Metadata<Value = unknown> {
  abstract readonly id: string
  abstract readonly resolverOptions: MetadataResolverOptions
  abstract readonly set: MetadataSetter<Value>
}

export const makeMetadata = <T>(
  id: Metadata<T>['id'],
  resolverOptions: Metadata<T>['resolverOptions'],
  set: Metadata<T>['set'],
): Metadata<T> => ({
  id,
  resolverOptions,
  set,
})

export const makeMetadataResolverOptions = (
  jsonPath: MetadataResolverOptions['jsonPath'],
  global?: MetadataResolverOptions['global'],
): MetadataResolverOptions => ({ jsonPath, global })
