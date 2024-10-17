// noinspection JSDeprecatedSymbols

import {
  MetadataResolverOptions,
  NgxMetaMetadataManager,
} from '../../ngx-meta-metadata-manager'
import { FactoryProvider } from '@angular/core'
import { MetadataSetterFactory } from '../metadata-setter-factory'

/**
 * Creates an Angular {@link https://angular.dev/guide/di/dependency-injection-providers#factory-providers-usefactory | factory provider}
 * providing an {@link NgxMetaMetadataManager}.
 *
 * See {@link https://ngx-meta.dev/guides/manage-your-custom-metadata/ | manage custom metadata guide} for an example.
 *
 * @deprecated Use {@link provideNgxMetaManager} APIs instead.
 *             See {@link https://ngx-meta.dev/guides/manage-your-custom-metadata/ | custom metadata guide} for more information.
 *
 * @remarks
 *
 * Factory providers are used for built-in modules instead of Angular services.
 * Reason is that code created by `@Injectable` decorator takes many bytes,
 * whereas a call to this function creating a factory provider takes fewer.
 *
 * See {@link https://github.com/davidlj95/ngx/issues/112}
 *
 * @param setterFactory - Function that creates a {@link NgxMetaMetadataManager} given some dependencies
 * @param opts - Options to create the factory
 * @public
 */
/* istanbul ignore next - unused. was covered when used */
export const makeMetadataManagerProviderFromSetterFactory = <T>(
  setterFactory: MetadataSetterFactory<T>,
  opts: MakeMetadataManagerProviderFromSetterFactoryOptions,
): FactoryProvider => {
  const deps = opts.d ?? []
  return {
    provide: NgxMetaMetadataManager,
    multi: true,
    useFactory: (...deps: unknown[]) => ({
      id: opts.id ?? opts.jP.join('.'),
      resolverOptions: {
        jsonPath: opts.jP,
        global: opts.g,
        objectMerge: opts.m,
      },
      set: setterFactory(...deps),
    }),
    deps,
  }
}

/**
 * Options argument object for {@link makeMetadataManagerProviderFromSetterFactory}.
 *
 * @deprecated Use {@link provideNgxMetaManager} APIs instead.
 *             See {@link https://ngx-meta.dev/guides/manage-your-custom-metadata/ | custom metadata guide} for more information.
 *
 * @public
 */
export interface MakeMetadataManagerProviderFromSetterFactoryOptions {
  /**
   * Dependencies to inject to the setter factory.
   *
   * See also:
   *
   * - {@link https://angular.dev/guide/di/dependency-injection-providers#factory-providers-usefactory:~:text=property%20is%20an%20array%20of%20provider%20tokens | Factory providers' deps}
   *
   * - {@link https://angular.dev/api/core/FactoryProvider#deps | FactoryProvider#deps}
   *
   * Defaults to no dependencies
   */
  d?: FactoryProvider['deps']
  /**
   * Metadata manager identifier
   *
   * See {@link NgxMetaMetadataManager.id}
   *
   * Defaults to the JSON path joined by dots (`['standard', 'title'] => 'standard.title'`)
   */
  id?: string
  /**
   * See {@link MetadataResolverOptions.jsonPath}
   */
  jP: MetadataResolverOptions['jsonPath']
  /**
   * See {@link MetadataResolverOptions.global}
   */
  g?: MetadataResolverOptions['global']
  /**
   * See {@link MetadataResolverOptions.objectMerge}
   */
  m?: MetadataResolverOptions['objectMerge']
}
