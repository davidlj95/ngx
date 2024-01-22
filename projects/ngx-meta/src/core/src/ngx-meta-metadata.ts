export abstract class NgxMetaMetadata<Value = unknown> {
  abstract readonly id: string
  abstract readonly resolverOptions: MetadataResolverOptions
  abstract readonly set: MetadataSetter<Value>
}

export interface MetadataResolverOptions {
  readonly jsonPath: ReadonlyArray<string>
  readonly global?: string
}

export type MetadataSetter<T> = (value: T) => void

export const _makeMetadata = <T>(
  id: NgxMetaMetadata<T>['id'],
  resolverOptions: NgxMetaMetadata<T>['resolverOptions'],
  set: NgxMetaMetadata<T>['set'],
): NgxMetaMetadata<T> => ({
  id,
  resolverOptions,
  set,
})

export const _makeMetadataResolverOptions = (
  jsonPath: MetadataResolverOptions['jsonPath'],
  global?: MetadataResolverOptions['global'],
): MetadataResolverOptions => ({ jsonPath, global })
