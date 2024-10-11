import { MetadataSetterFactory } from './make-metadata-manager-provider-from-setter-factory'
import { FactoryProvider } from '@angular/core'
import {
  MetadataResolverOptions,
  NgxMetaMetadataManager,
} from '../ngx-meta-metadata-manager'

/**
 * @param jsonPath -
 * @param setterFactory -
 * @param options -
 *
 * @alpha
 */
export const provideNgxMetaManager = <T>(
  jsonPath: string,
  setterFactory: MetadataSetterFactory<T>,
  options: _ProvideNgxMetaManagerOptions = {},
): FactoryProvider => ({
  provide: NgxMetaMetadataManager,
  multi: true,
  useFactory: (...deps: ReadonlyArray<unknown>) =>
    ({
      id: options.id ?? jsonPath,
      set: setterFactory(...deps),
      resolverOptions: {
        jsonPath: jsonPath.split('.'),
        global: options.global,
        objectMerge: options.objectMerge,
      },
    }) satisfies NgxMetaMetadataManager<T>,
  deps: options.deps,
})

/**
 * @internal
 */
export type _ProvideNgxMetaManagerOptions = Partial<{
  deps: FactoryProvider['deps']
  global: MetadataResolverOptions['global']
  id: NgxMetaMetadataManager['id']
  objectMerge: MetadataResolverOptions['objectMerge']
}>

/**
 *
 * @param options -
 *
 * @alpha
 */
export const withManagerOptions = (
  ...options: ReadonlyArray<_ProvideNgxMetaManagerOptions>
): _ProvideNgxMetaManagerOptions =>
  options.reduce<Partial<_ProvideNgxMetaManagerOptions>>(
    (acc, curr) => ({ ...acc, ...curr }),
    {},
  )

/**
 *
 * @param deps -
 *
 * @alpha
 */
export const withManagerDeps = (
  ...deps: Exclude<FactoryProvider['deps'], undefined>
): Partial<_ProvideNgxMetaManagerOptions> => ({
  deps,
})

/**
 *
 * @param global -
 *
 * @alpha
 */
export const withManagerGlobal = (
  global: string,
): Partial<_ProvideNgxMetaManagerOptions> => ({ global })

/**
 *
 * @param id -
 *
 * @alpha
 */
export const withManagerId = (
  id: string,
): Partial<_ProvideNgxMetaManagerOptions> => ({ id })

/**
 * @alpha
 */
export const withManagerObjectMerging =
  (): Partial<_ProvideNgxMetaManagerOptions> => ({ objectMerge: true })

/**
 *
 * @param jsonPath -
 *
 * @alpha
 */
export const withManagerJsonPath = (
  ...jsonPath: MetadataResolverOptions['jsonPath']
): string => jsonPath.join('.')
