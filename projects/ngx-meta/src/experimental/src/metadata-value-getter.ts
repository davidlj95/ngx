import { MetadataDefinition } from './metadata-definition'
import { MetadataValues } from './metadata-values'

export class MetadataValueGetter {
  get<T>(
    definition: MetadataDefinition,
    values: MetadataValues,
  ): T | undefined {
    const keys = [...definition.scope.split('.'), definition.name]
    let value: unknown = values
    for (const key of keys) {
      if (value === undefined || value === null) {
        break
      }
      value = (value as MetadataValues)[key]
    }
    return value !== undefined ? (value as T) : undefined
  }
}
