import {
  makeMetadataProvider,
  makeMetadataResolverOptions,
  MetadataProvider,
  MetadataSetter,
} from './metadata-provider'
import { FactoryProvider } from '@angular/core'

export type MetadataSetterFactory<T> = (
  ...deps: Exclude<FactoryProvider['deps'], undefined>
) => MetadataSetter<T>

export const provideMetadataFactory = <T>(
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
    provide: MetadataProvider,
    multi: true,
    useFactory: (...deps: unknown[]) =>
      makeMetadataProvider(
        opts.id ?? opts.jP.join('.'),
        makeMetadataResolverOptions(opts.jP, opts.g),
        setterFactory(...deps),
      ),
    deps,
  }
}
