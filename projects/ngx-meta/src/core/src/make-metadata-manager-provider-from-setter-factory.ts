import {
  _makeMetadataManager,
  _makeMetadataResolverOptions,
  MetadataResolverOptions,
  MetadataSetter,
  NgxMetaMetadataManager,
} from './ngx-meta-metadata-manager'
import { FactoryProvider } from '@angular/core'

/**
 * Utility type for a function that returns a {@link MetadataSetter}
 * provided some dependencies (which should be able to be injectable)
 *
 * @public
 */
export type MetadataSetterFactory<T> = (
  ...deps: Exclude<FactoryProvider['deps'], undefined>
) => MetadataSetter<T>

/**
 * Creates an Angular's {@link https://angular.dev/guide/di/dependency-injection-providers#factory-providers-usefactory | Factory provider}
 * that provides an {@link NgxMetaMetadataManager}
 *
 * @remarks
 *
 * Factory providers are used for built-in modules instead of Angular services.
 * Reason is that code created by `@Injectable` decorator takes many bytes,
 * whereas a call to this function creating a factory provider takes few.
 *
 * See {@link https://github.com/davidlj95/ngx/issues/112}
 *
 * @param setterFactory - Function that creates a {@link NgxMetaMetadataManager} given some dependencies. See {@link MetadataSetterFactory}
 * @param opts - Options to create the factory.
 *               `d` is the list of dependencies to inject. Defaults to no dependencies
 *               `id` is the {@link NgxMetaMetadataManager.id} to use.
 *               Defaults to resolver options `jsonPath` joined by dots.
 *               `jP` is the `jsonPath` that will be used for the {@link MetadataResolverOptions.jsonPath}
 *               `g` is the `global` that will be used for the {@link MetadataResolverOptions.global}
 *               `m` is the `objectMerge` that will be used for the {@link MetadataResolverOptions.objectMerge}
 *
 * @public
 */
export const makeMetadataManagerProviderFromSetterFactory = <T>(
  setterFactory: MetadataSetterFactory<T>,
  opts: {
    // Dependencies to provide to setter factory
    d?: FactoryProvider['deps']
    // ID of the manager
    id?: string
    // JSON Path
    jP: MetadataResolverOptions['jsonPath']
    // Global
    g?: MetadataResolverOptions['global']
    // Object merge
    m?: MetadataResolverOptions['objectMerge']
  },
): FactoryProvider => {
  /* istanbul ignore next */
  const deps = opts.d ?? []
  return {
    provide: NgxMetaMetadataManager,
    multi: true,
    useFactory: (...deps: unknown[]) =>
      _makeMetadataManager(
        opts.id ?? opts.jP.join('.'),
        _makeMetadataResolverOptions(opts.jP, opts.g, opts.m),
        setterFactory(...deps),
      ),
    deps,
  }
}
