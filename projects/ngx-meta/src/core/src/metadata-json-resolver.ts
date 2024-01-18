import { Metadata } from './metadata'
import { MetadataValues } from './metadata-values'
import { isObject } from './is-object'
import { InjectionToken } from '@angular/core'

export type MetadataJsonResolver = (
  metadata: Metadata,
  values?: MetadataValues,
) => unknown
export const METADATA_JSON_RESOLVER = new InjectionToken<MetadataJsonResolver>(
  ngDevMode ? 'NgxMeta JSON Resolver' : 'NgxMetaJR',
  {
    providedIn: 'root',
    factory: (): MetadataJsonResolver => (metadata, values?) => {
      if (values === undefined) {
        return
      }

      const keys = [...metadata.jsonPath]
      let value: unknown = values
      for (const key of keys) {
        if (value === undefined || value === null) {
          break
        }
        value = (value as IndexedObject)[key]
      }
      const globalValue =
        metadata.global !== undefined
          ? (values as IndexedObject)[metadata.global]
          : undefined
      if (value !== undefined && !globalValue) {
        return value
      }
      if (isObject(value) && isObject(globalValue)) {
        return {
          ...globalValue,
          ...value,
        }
      }
      return globalValue
    },
  },
)

type IndexedObject = Record<string, unknown>
