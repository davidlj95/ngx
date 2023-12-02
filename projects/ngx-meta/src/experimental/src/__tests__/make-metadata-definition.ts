import { MetadataDefinition } from '../metadata-definition'

export function makeMetadataDefinition({
  name,
  scope,
  globalName,
}: {
  name?: string
  scope?: string
  globalName?: string
} = {}): MetadataDefinition {
  return {
    name: name ?? 'dummy name',
    scope: scope ?? 'dummy scope',
    globalName,
  }
}
