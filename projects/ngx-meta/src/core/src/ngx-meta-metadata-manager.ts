/**
 * Abstract class every metadata manager must implement.
 *
 * Used as {@link https://angular.dev/guide/di/dependency-injection-providers#using-an-injectiontoken-object | injection token}
 * to provide metadata managers the library will take into account.
 *
 * Can be created with {@link makeMetadataManagerProviderFromSetterFactory}
 *
 * @public
 */
export abstract class NgxMetaMetadataManager<Value = unknown> {
  /**
   * Identifies the metadata manager
   *
   * Used to avoid setting same metadata twice in case same two managers are
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
 * See {@link NgxMetaMetadataManager.resolverOptions}
 * @public
 */
export interface MetadataResolverOptions {
  readonly jsonPath: ReadonlyArray<string>
  readonly global?: string
  readonly objectMerge?: boolean
}

/**
 * See {@link NgxMetaMetadataManager.set}
 * @public
 */
export type MetadataSetter<T> = (value: T) => void

/**
 * @internal
 */
export const _makeMetadataManager = <T>(
  id: NgxMetaMetadataManager<T>['id'],
  resolverOptions: NgxMetaMetadataManager<T>['resolverOptions'],
  set: NgxMetaMetadataManager<T>['set'],
): NgxMetaMetadataManager<T> => ({
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
  objectMerge?: MetadataResolverOptions['objectMerge'],
): MetadataResolverOptions => ({ jsonPath, global, objectMerge })
