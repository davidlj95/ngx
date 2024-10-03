import { MetadataValues } from '../service'
import { InjectionToken } from '@angular/core'
import { MetadataResolverOptions } from '../managers'
import { isObject } from '../utils/is-object'
import { _isDefined } from '../utils'

export const METADATA_JSON_RESOLVER = new InjectionToken<MetadataJsonResolver>(
  ngDevMode ? 'NgxMeta JSON Resolver' : 'NgxMetaJR',
  {
    factory: () => (values, resolverOptions) => {
      if (values === undefined) {
        return
      }

      const keys = [...resolverOptions.jsonPath]
      let value: unknown = values
      for (const key of keys) {
        if (!_isDefined(value)) {
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

export type MetadataJsonResolver = (
  values: MetadataValues | undefined,
  resolverOptions: MetadataResolverOptions,
) => unknown

type StringIndexedObject = Record<string, unknown>
