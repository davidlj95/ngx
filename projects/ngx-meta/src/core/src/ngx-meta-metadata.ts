/**
 * Abstract class every metadata setter must implement.
 *
 * Used as {@link https://angular.dev/guide/di/dependency-injection-providers#using-an-injectiontoken-object | injection token}
 * to provide metadata setters the library will take into account.
 *
 * Can be created with {@link makeMetadataProviderFromSetterFactory}
 *
 * @public
 */
export abstract class NgxMetaMetadata<Value = unknown> {
  /**
   * Identifies the metadata setter
   *
   * Used to avoid setting same metadata twice in case same two setters are
   * injected by mistake
   */
  abstract readonly id: string
  /**
   * Options to be passed to the metadata resolver in order to fetch the value
   * for a specific metadata given some {@link MetadataValues}
   */
  abstract readonly resolverOptions: MetadataResolverOptions
  /**
   * A function that alters a page's metadata with the provided value.
   */
  abstract readonly set: MetadataSetter<Value>
}

/**
 * See {@link NgxMetaMetadata.resolverOptions}
 * @public
 */
export interface MetadataResolverOptions {
  readonly jsonPath: ReadonlyArray<string>
  readonly global?: string
}

/**
 * See {@link NgxMetaMetadata.set}
 * @public
 */
export type MetadataSetter<T> = (value: T) => void

/**
 * @internal
 */
export const _makeMetadata = <T>(
  id: NgxMetaMetadata<T>['id'],
  resolverOptions: NgxMetaMetadata<T>['resolverOptions'],
  set: NgxMetaMetadata<T>['set'],
): NgxMetaMetadata<T> => ({
  id,
  resolverOptions,
  set,
})

/**
 * @internal
 */
export const _makeMetadataResolverOptions = (
  jsonPath: MetadataResolverOptions['jsonPath'],
  global?: MetadataResolverOptions['global'],
): MetadataResolverOptions => ({ jsonPath, global })
