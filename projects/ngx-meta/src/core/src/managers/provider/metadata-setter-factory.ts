import { FactoryProvider } from '@angular/core'
import { MetadataSetter } from '../ngx-meta-metadata-manager'

/**
 * Utility type for a factory function that returns a {@link MetadataSetter} given some injectable dependencies.
 *
 * Used as part of {@link makeMetadataManagerProviderFromSetterFactory}.
 *
 * @public
 */
export type MetadataSetterFactory<T> = (
  ...deps: Exclude<FactoryProvider['deps'], undefined>
) => MetadataSetter<T>
