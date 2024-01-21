export type MetadataSetter<T> = (value: T) => void
export interface MetadataResolverOptions {
  readonly jsonPath: ReadonlyArray<string>
  readonly global?: string
}

export abstract class MetadataProvider<Value> {
  abstract readonly id: string
  abstract readonly resolverOptions: MetadataResolverOptions
  abstract readonly set: MetadataSetter<Value>
}

export const makeMetadataProvider = <T>(
  id: MetadataProvider<T>['id'],
  resolverOptions: MetadataProvider<T>['resolverOptions'],
  set: MetadataProvider<T>['set'],
): MetadataProvider<T> => ({
  id,
  resolverOptions,
  set,
})

export const makeMetadataResolverOptions = (
  jsonPath: MetadataResolverOptions['jsonPath'],
  global?: MetadataResolverOptions['global'],
): MetadataResolverOptions => ({ jsonPath, global })
