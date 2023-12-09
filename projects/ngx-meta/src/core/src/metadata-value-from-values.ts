import { MetadataDefinition } from './metadata-definition'
import { MetadataValues } from './metadata-values'
import { MaybeUndefined } from './maybe-undefined'

export class MetadataValueFromValues {
  get<T>(
    definition: MetadataDefinition,
    values?: MetadataValues,
  ): T | undefined {
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
    if (value !== undefined || !definition.globalName) {
      return value as MaybeUndefined<T>
    }
    return values[definition.globalName] as MaybeUndefined<T>
  }
}
