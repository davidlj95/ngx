import { Metadata } from './metadata'
import { MetadataValues } from './metadata-values'
import { MaybeUndefined } from './maybe-undefined'
import { isObject } from './is-object'
import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class MetadataJsonResolver {
  get<T>(definition: Metadata, values?: MetadataValues): T | undefined {
    if (values === undefined) {
      return
    }

    const keys = [...definition.jsonPath]
    let value: unknown = values
    for (const key of keys) {
      if (value === undefined || value === null) {
        break
      }
      value = (value as MetadataValues)[key]
    }
    const globalValue =
      definition.global !== undefined ? values[definition.global] : undefined
    if (value !== undefined && !globalValue) {
      return value as MaybeUndefined<T>
    }
    if (isObject(value) && isObject(globalValue)) {
      return {
        ...globalValue,
        ...value,
      } as T
    }
    return globalValue as MaybeUndefined<T>
  }
}
