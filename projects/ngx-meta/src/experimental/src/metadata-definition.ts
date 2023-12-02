export interface MetadataDefinition<Name extends string = string> {
  name: Name
  scope: string
  globalName?: string
}
