import { MetadataValues } from './metadata-values'
import { isObject } from './is-object'
import { InjectionToken } from '@angular/core'
import { MetadataResolverOptions } from './ngx-meta-metadata-setter'

export type MetadataJsonResolver = (
  values: MetadataValues | undefined,
  resolverOptions: MetadataResolverOptions,
) => unknown
export const METADATA_JSON_RESOLVER = new InjectionToken<MetadataJsonResolver>(
  ngDevMode ? 'NgxMeta JSON Resolver' : 'NgxMetaJR',
  {
    providedIn: 'root',
    factory: (): MetadataJsonResolver => (values, resolverOptions) => {
      if (values === undefined) {
        return
      }

      const keys = [...resolverOptions.jsonPath]
      let value: unknown = values
      for (const key of keys) {
        if (value === undefined || value === null) {
          break
        }
        value = (value as IndexedObject)[key]
      }
      const globalValue =
        resolverOptions.global !== undefined
          ? (values as IndexedObject)[resolverOptions.global]
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
