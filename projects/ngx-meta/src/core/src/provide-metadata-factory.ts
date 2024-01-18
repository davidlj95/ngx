import { MetadataProvider, MetadataSetter } from './metadata-provider'
import { FactoryProvider } from '@angular/core'
import { Metadata } from './metadata'

export type MetadataSetterFactory<T> = (
  ...deps: Exclude<FactoryProvider['deps'], undefined>
) => MetadataSetter<T>

export function provideMetadataFactory<T>(
  definition: Metadata,
  setterFactory: MetadataSetterFactory<T>,
  deps?: FactoryProvider['deps'],
): FactoryProvider {
  return {
    provide: MetadataProvider,
    multi: true,
    useFactory: (...deps: unknown[]) =>
      makeMetadataProvider(definition, setterFactory(...deps)),
    deps,
  }
}

const makeMetadataProvider = <T>(
  metadata: Metadata,
  set: MetadataSetter<T>,
): MetadataProvider<T> => ({
  metadata,
  set,
})
