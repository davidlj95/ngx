import { FactoryProvider } from '@angular/core'
import {
  MetadataResolverOptions,
  NgxMetaMetadataManager,
} from '../../ngx-meta-metadata-manager'
import { GlobalMetadata } from '../../../globals'
import { MetadataSetterFactory } from '../metadata-setter-factory'
import { StringKeyOf } from '../../../utils/string-key-of'

/**
 * Creates an {@link NgxMetaMetadataManager} provider to manage some metadata.
 *
 * Check out {@link https://ngx-meta.dev/guides/manage-your-custom-metadata/ | manage your custom metadata guide} to
 * learn how to provide your custom metadata managers.
 *
 * @remarks
 *
 * Options can be specified using helper functions. {@link withOptions} can be used to combine more than one.
 *
 * Available option functions:
 *
 *  - {@link withManagerDeps}
 *
 *  - {@link withManagerGlobal}
 *
 *  - {@link withManagerObjectMerging}
 *
 * @example
 *
 * ```typescript
 * const CUSTOM_TITLE_PROVIDER = provideNgxMetaManager<string | undefined>(
 *     'custom.title',
 *     (metaElementsService: NgxMetaElementsService) => (value) => {
 *       metaElementsService.set(
 *         withNameAttribute('custom:title'),
 *         withContentAttribute(value),
 *       )
 *     },
 *     withOptions(
 *      withManagerDeps(NgxMetaElementsService),
 *      withGlobal('title'),
 *     ),
 *   )
 * ```
 *
 * @param jsonPath - Path to access the metadata value this manager needs given a JSON object
 *                   containing metadata values. Path is expressed as the keys to use to access the value
 *                   joined by a "." character.
 *                   You can use {@link withManagerJsonPath} to provide an array of keys instead.
 *                   For more information, checkout {@link MetadataResolverOptions.jsonPath}
 * @param setterFactory - Factory function that creates the {@link MetadataSetter} function for the manager (which
 *                        manages the metadata element on the page).
 *                        You can inject dependencies either using {@link withManagerDeps} option, that will be passed
 *                        as arguments to the setter factory function. This way is preferred, as takes fewer bytes of
 *                        your bundle size. However, type safety depends on you.
 *                        Or use {@link https://angular.dev/api/core/inject | Angular's `inject` function} for a more
 *                        type-safe option.
 * @param options - Extra options for the metadata manager provider creation. Use one of the helpers listed in this
 *                  method's reference docs to supply one or more of them.
 * @public
 */
export const provideNgxMetaManager = <T>(
  jsonPath: string,
  setterFactory: MetadataSetterFactory<T>,
  /* istanbul ignore next - quite simple */
  options: _ProvideNgxMetaManagerOptions = {},
): FactoryProvider => ({
  provide: NgxMetaMetadataManager,
  multi: true,
  useFactory: (...deps: readonly unknown[]) =>
    ({
      id: jsonPath,
      set: setterFactory(...deps),
      resolverOptions: {
        jsonPath: jsonPath.split('.'),
        global: options.g,
        objectMerge: options.o,
      },
    }) satisfies NgxMetaMetadataManager<T>,
  deps: options.d,
})

/**
 * @internal
 */
export type _ProvideNgxMetaManagerOptions = Partial<{
  d: FactoryProvider['deps']
  g: MetadataResolverOptions['global']
  i: NgxMetaMetadataManager['id']
  o: MetadataResolverOptions['objectMerge']
}>

/**
 * Specifies dependencies to inject to the setter factory function passed to {@link provideNgxMetaManager}
 *
 * See also:
 *
 * - {@link https://angular.dev/guide/di/dependency-injection-providers#factory-providers-usefactory:~:text=property%20is%20an%20array%20of%20provider%20tokens | Factory providers' deps}
 *
 * - {@link https://angular.dev/api/core/FactoryProvider#deps | FactoryProvider#deps}
 *
 * @param deps - Dependencies to inject. Each argument declares the dependency to inject.
 *
 * @public
 */
export const withManagerDeps = (
  ...deps: Exclude<FactoryProvider['deps'], undefined>
): _ProvideNgxMetaManagerOptions => ({
  d: deps,
})

/**
 * Sets the global key to use for a metadata manager created with {@link provideNgxMetaManager}
 *
 * @param global - See {@link MetadataResolverOptions.global}
 *
 * @public
 */
export const withManagerGlobal = <G extends string = keyof GlobalMetadata>(
  global: G,
): _ProvideNgxMetaManagerOptions => ({ g: global })

/**
 * Enables object merging for the manager being created with {@link provideNgxMetaManager}
 *
 * See {@link MetadataResolverOptions.objectMerge} for more information.
 *
 * @public
 */
export const withManagerObjectMerging = (): _ProvideNgxMetaManagerOptions => ({
  o: true,
})

/**
 * Transforms a JSON Path specified as an array of keys into a string joined by dots.
 *
 * Useful to use with {@link provideNgxMetaManager} to avoid repeating same keys around.
 *
 * @remarks
 *
 * You can specify a type to ensure the keys are valid. See example below.
 *
 * Beware that specifying a type won't work if:
 *
 * The type refers other types and more than 2 levels are specified:
 *
 * ```typescript
 * interface CustomMetadata { custom: Custom }
 * interface Custom { moar: Moar }
 *
 * // 👇❌ Reports incorrect Typescript error about `never` type
 * withManagerJsonPath<CustomMetadata>('custom', 'moar', 'foo')
 * ```
 *
 * More than 3 keys are specified:
 *
 * ```typescript
 * interface CustomMetadata {
 *   custom: {
 *     moar: {
 *       moarThanMoar: {
 *         foo: string
 *       }
 *     }
 *   }
 * }
 *
 * // 👇❌ Reports incorrect Typescript error about `never` type
 * withManagerJsonPath<CustomMetadata>('custom', 'moar', 'moarThanMoar', 'foo') //
 * ```
 *
 * Omit the type to skip type checking and its limitations:
 *
 * ```typescript
 * withManagerJsonPath('whatever', 'untyped', 'keys')
 * ```
 *
 * @example
 *
 * ```typescript
 * interface CustomMetadata {
 *   custom: {
 *     title: string
 *   }
 * }
 *
 * withManagerJsonPath<CustomMetadata>('custom','title') // ✅ No error. IDE helps you auto-complete.
 * withManagerJsonPath<CustomMetadata>('custom','not-a-prop') // ❌ Typescript error
 * withManagerJsonPath('no', 'type', 'checks')
 * ```
 *
 * @param jsonPath - Parts of the JSON Path to join into a string.
 *
 * @public
 */
export const withManagerJsonPath: WithManagerJsonPath = (
  ...jsonPath: MetadataResolverOptions['jsonPath']
) => jsonPath.join('.')

/**
 * @internal
 */
interface WithManagerJsonPath {
  <T extends object>(key1: StringKeyOf<T>): string
  <T extends object>(
    key1: StringKeyOf<T>,
    key2: StringKeyOf<T[typeof key1]>,
  ): string
  <T extends object>(
    key1: StringKeyOf<T>,
    key2: StringKeyOf<T[typeof key1]>,
    key3: StringKeyOf<T[typeof key1][typeof key2]>,
  ): string
  (...jsonPaths: readonly string[]): string
}
