import { Metadata } from './metadata'
import { FactoryProvider } from '@angular/core'
import { MetadataDefinition } from './metadata-definition'
import { MetadataSetter } from './metadata-setter'

export type MetadataSetterFactory<T> = (
  ...deps: Exclude<FactoryProvider['deps'], undefined>
) => MetadataSetter<T>

const makeMetadata = <T>(
  definition: MetadataDefinition,
  set: MetadataSetter<T>,
): Metadata<T> => {
  return {
    definition,
    set,
  }
}

export function provideMetadataFactory<T>(
  definition: MetadataDefinition,
  setterFactory: MetadataSetterFactory<T>,
  deps?: FactoryProvider['deps'],
): FactoryProvider {
  return {
    provide: Metadata,
    multi: true,
    useFactory: (...deps: unknown[]) =>
      makeMetadata(definition, setterFactory(...deps)),
    deps,
  }
}
