import {
  _makeMetadataResolverOptions,
  _makeMetadataSetter,
  MetadataSetter,
  NgxMetaMetadataSetter,
} from './ngx-meta-metadata-setter'
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
 * that provides an {@link NgxMetaMetadataSetter}
 *
 * @remarks
 *
 * Factory providers are used for built-in modules instead of Angular services.
 * Reason is that code created by `@Injectable` decorator takes many bytes,
 * whereas a call to this function creating a factory provider takes few.
 *
 * See {@link https://github.com/davidlj95/ngx/issues/112}
 *
 * @param setterFactory - Function that creates a {@link NgxMetaMetadataSetter} given some dependencies. See {@link MetadataSetterFactory}
 * @param opts - Options to create the factory.
 *               `d` is the list of dependencies to inject. Defaults to no dependencies
 *               `id` is the {@link NgxMetaMetadataSetter.id} to use.
 *               Defaults to resolver options `jsonPath` joined by dots.
 *               `jP` is the `jsonPath` that will be used for the {@link MetadataResolverOptions.jsonPath}
 *               `g` is the `global` that will be used for the {@link MetadataResolverOptions.global}
 *
 * @public
 */
export const makeMetadataSetterProviderFromFactory = <T>(
  setterFactory: MetadataSetterFactory<T>,
  opts: {
    // Dependencies to provide to setter factory
    d?: FactoryProvider['deps']
    // ID of the setter
    id?: string
    // JSON Path
    jP: ReadonlyArray<string>
    // Global
    g?: string
  },
): FactoryProvider => {
  const deps = opts.d ?? []
  return {
    provide: NgxMetaMetadataSetter,
    multi: true,
    useFactory: (...deps: unknown[]) =>
      _makeMetadataSetter(
        opts.id ?? opts.jP.join('.'),
        _makeMetadataResolverOptions(opts.jP, opts.g),
        setterFactory(...deps),
      ),
    deps,
  }
}
