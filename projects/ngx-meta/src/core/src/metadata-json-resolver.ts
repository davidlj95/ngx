import { MetadataValues } from './metadata-values'
import { InjectionToken } from '@angular/core'
import { MetadataResolverOptions } from './ngx-meta-metadata-manager'
import { isObject } from './is-object'

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
        value = (value as StringIndexedObject)[key]
      }
      const globalValue =
        resolverOptions.global !== undefined
          ? (values as StringIndexedObject)[resolverOptions.global]
          : undefined
      if (
        isObject(value) &&
        isObject(globalValue) &&
        resolverOptions.objectMerge
      ) {
        return {
          ...globalValue,
          ...value,
        }
      }
      if (value !== undefined) {
        return value
      }
      return globalValue
    },
  },
)

type StringIndexedObject = Record<string, unknown>
