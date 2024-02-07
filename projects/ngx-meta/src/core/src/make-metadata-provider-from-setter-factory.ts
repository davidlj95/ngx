import {
  _makeMetadata,
  _makeMetadataResolverOptions,
  MetadataSetter,
  NgxMetaMetadata,
} from './ngx-meta-metadata'
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

export const makeMetadataProviderFromSetterFactory = <T>(
  setterFactory: MetadataSetterFactory<T>,
  opts: {
    // Dependencies to provide to setter factory
    d?: FactoryProvider['deps']
    // ID of the manager
    id?: string
    // JSON Path
    jP: ReadonlyArray<string>
    // Global
    g?: string
  },
): FactoryProvider => {
  const deps = opts.d ?? []
  return {
    provide: NgxMetaMetadata,
    multi: true,
    useFactory: (...deps: unknown[]) =>
      _makeMetadata(
        opts.id ?? opts.jP.join('.'),
        _makeMetadataResolverOptions(opts.jP, opts.g),
        setterFactory(...deps),
      ),
    deps,
  }
}
