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
  /* istanbul ignore next - quite simple */
  options: _ProvideNgxMetaManagerOptions = {},
): FactoryProvider => ({
  provide: NgxMetaMetadataManager,
  multi: true,
  useFactory: (...deps: ReadonlyArray<unknown>) =>
    ({
      id: options.i ?? jsonPath,
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
 *
 * @param deps -
 *
 * @alpha
 */
export const withManagerDeps = (
  ...deps: Exclude<FactoryProvider['deps'], undefined>
): _ProvideNgxMetaManagerOptions => ({
  d: deps,
})

/**
 *
 * @param global -
 *
 * @alpha
 */
export const withManagerGlobal = (
  global: string,
): _ProvideNgxMetaManagerOptions => ({ g: global })

/**
 *
 * @param id -
 *
 * @alpha
 */
export const withManagerId = (id: string): _ProvideNgxMetaManagerOptions => ({
  i: id,
})

/**
 * @alpha
 */
export const withManagerObjectMerging = (): _ProvideNgxMetaManagerOptions => ({
  o: true,
})

/**
 *
 * @param jsonPath -
 *
 * @alpha
 */
/* istanbul ignore next - quite simple */
export const withManagerJsonPath = (
  ...jsonPath: MetadataResolverOptions['jsonPath']
): string => jsonPath.join('.')
