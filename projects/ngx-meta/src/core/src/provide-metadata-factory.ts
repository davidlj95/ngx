import { MetadataProvider } from './metadata-provider'
import { FactoryProvider } from '@angular/core'
import { Metadata } from './metadata'
import { MetadataSetter } from './metadata-setter'

export type MetadataSetterFactory<T> = (
  ...deps: Exclude<FactoryProvider['deps'], undefined>
) => MetadataSetter<T>

const makeMetadata = <T>(
  definition: Metadata,
  set: MetadataSetter<T>,
): MetadataProvider<T> => {
  return {
    metadata: definition,
    set,
  }
}

export function provideMetadataFactory<T>(
  definition: Metadata,
  setterFactory: MetadataSetterFactory<T>,
  deps?: FactoryProvider['deps'],
): FactoryProvider {
  return {
    provide: MetadataProvider,
    multi: true,
    useFactory: (...deps: unknown[]) =>
      makeMetadata(definition, setterFactory(...deps)),
    deps,
  }
}
