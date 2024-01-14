import { MetadataProvider } from './metadata-provider'
import { FactoryProvider } from '@angular/core'
import { Metadata } from './metadata'
import { MetadataSetter } from './metadata-setter'

export type MetadataSetterFactory<T> = (
  ...deps: Exclude<FactoryProvider['deps'], undefined>
) => MetadataSetter<T>

const makeMetadataProvider = <T>(
  metadata: Metadata,
  set: MetadataSetter<T>,
): MetadataProvider<T> => ({
  metadata,
  set,
})

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
