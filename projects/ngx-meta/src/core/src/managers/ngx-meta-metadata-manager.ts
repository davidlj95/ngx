import { inject } from '@angular/core'

/**
 * Abstract class every metadata manager must implement.
 *
 * Used as {@link https://angular.dev/guide/di/dependency-injection-providers#using-an-injectiontoken-object | injection token}
 * to provide metadata managers the library will take into account.
 *
 * @remarks
 *
 * See also:
 *
 * - {@link https://ngx-meta.dev/guides/manage-your-custom-metadata/ | Manage your custom metadata}
 *
 * - {@link makeMetadataManagerProviderFromSetterFactory} for a helper to create a metadata manager
 *
 * @typeParam Value - Value type that can be handled by the setter
 *
 * @public
 */
export abstract class NgxMetaMetadataManager<Value = unknown> {
  /**
   * Identifies the metadata manager.
   *
   * Used to avoid setting same metadata twice in case same two managers are
   * injected by mistake.
   */
  abstract readonly id: string
  /**
   * {@inheritDoc MetadataResolverOptions}
   */
  abstract readonly resolverOptions: MetadataResolverOptions
  /**
   * A function that alters a page's metadata with the provided value.
   */
  abstract readonly set: MetadataSetter<Value>
}

export const injectMetadataManagers: () => ReadonlyArray<NgxMetaMetadataManager> =
  () =>
    // https://stackoverflow.com/q/74598049/3263250
    (inject(NgxMetaMetadataManager, {
      optional: true,
    }) as ReadonlyArray<NgxMetaMetadataManager> | null) ?? []

/**
 * Options to resolve metadata values for a metadata manager
 *
 * Used in {@link NgxMetaMetadataManager.resolverOptions} with type {@link MetadataResolverOptions}
 *
 * @public
 */
export interface MetadataResolverOptions {
  /**
   * JSON path to use to access a metadata values JSON object when resolving a metadata value.
   *
   * @example
   * The following JSON path
   *
   * ```typescript
   * const jsonPath = `['foo', 'bar']`
   * ```
   *
   * When resolving the following sample metadata values JSON
   *
   * ```typescript
   * const metadataValues = {
   *   foo: {
   *     bar: 'fooBar'
   *   }
   * }
   * ```
   *
   * Would access the `bar` key inside the `foo` object and resolve `fooBar` as metadata value
   */
  readonly jsonPath: ReadonlyArray<string>

  /**
   * Global key in a metadata values object to use when resolving a metadata value.
   *
   * @example
   * The following global
   *
   * ```typescript
   * const global = 'foo'
   * ```
   *
   * When resolving the following sample metadata values JSON
   *
   * ```typescript
   * const metadataValues = {
   *   foo: 'bar'
   * }
   * ```
   *
   * Would access the `foo` global key and resolve `bar` as metadata value
   *
   * Defaults to `undefined` (no global to be used for the metadata manager)
   */
  readonly global?: string

  /**
   * Enables merging the metadata value when it's an object and multiple values are found
   *
   * @example
   *
   * Given a metadata manager whose:
   *
   * - {@link MetadataResolverOptions.jsonPath} is `['foo', 'bar']`
   *
   * - {@link MetadataResolverOptions.global} is `bar`
   *
   * Then resolving the following metadata values:
   *
   * ```typescript
   * const metadataValues = {
   *   bar: {a: 'a', b: 'b'},
   *   foo: {
   *     bar: { b: 'B', c: 'C'}
   *   }
   * }
   * ```
   *
   * Would resolve to two objects (the JSON path one and the global one).
   *
   * If specifying both, specific JSON path one will take preference (as mentioned in the
   * {@link https://ngx-meta.dev/guides/metadata-values-json/#combining-both | metadata values JSON guide}).
   *
   * So it would resolve to `{ b: 'B', c: 'C' }`. However, when enabling object merging, both objects resolved
   * are merged (with specific one taking preference too). Therefore, final value resolved would be
   * `{ a: 'a', b: 'B', c: 'C' }`
   *
   * This merging also happens when objects are found during defaults and route values resolution.
   */
  readonly objectMerge?: boolean
}

/**
 * See {@link NgxMetaMetadataManager.set}
 *
 * @typeParam T - Value type the setter accepts as argument
 *
 * @public
 */
export type MetadataSetter<T> = (value: T) => void
