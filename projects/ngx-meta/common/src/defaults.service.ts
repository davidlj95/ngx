import { Injectable } from '@angular/core'
import { isObject } from './is-object'

@Injectable()
export class DefaultsService {
  resolve<T extends object>(data: T, ...multipleDefaults: ReadonlyArray<T>): T {
    if (multipleDefaults.length === 0) {
      return data
    }

    const definedData = removeUndefinedKeysFromObject(data)
    const mergedObjects: { [k: string]: object } = {}
    const [defaults, ...restDefaults] = multipleDefaults
    for (const dataKey in data) {
      const dataValue = data[dataKey]
      const defaultValue = defaults[dataKey]
      if (isObject(dataValue) && isObject(defaultValue)) {
        mergedObjects[dataKey] = this.resolve<object>(dataValue, defaultValue)
      }
    }

    const dataWithDefaults = {
      ...defaults,
      ...definedData,
      ...mergedObjects,
    }

    if (restDefaults.length === 0) {
      return dataWithDefaults
    }

    return this.resolve(dataWithDefaults, ...restDefaults)
  }
}

function removeUndefinedKeysFromObject<T extends object>(
  object: T,
): { [k in keyof T]: Exclude<T[k], undefined> } {
  return Object.fromEntries(
    Object.entries(object)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .filter(([key, value]) => value !== undefined)
      .map(([key, value]) =>
        isObject(value)
          ? [key, removeUndefinedKeysFromObject(value)]
          : [key, value],
      ),
  ) as { [k in keyof T]: Exclude<T[k], undefined> }
}
