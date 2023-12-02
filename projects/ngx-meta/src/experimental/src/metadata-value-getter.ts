import { MetadataDefinition } from './metadata-definition'

export class MetadataValueGetter {
  get<T>(definition: MetadataDefinition, values: object): T | undefined {
    const keys = [...definition.scope.split('.'), definition.name]
    let value: any = values
    for (const key of keys) {
      if (value === undefined || value === null) {
        break
      }
      value = value[key]
    }
    return value
  }
}
