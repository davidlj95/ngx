import { MetadataDefinition } from '../metadata-definition'

export function makeMetadataDefinition(
  opts: Partial<ConstructorParameters<typeof MetadataDefinition>[0]> = {},
): MetadataDefinition {
  return new MetadataDefinition({
    name: opts.name ?? 'dummy name',
    scope: opts.scope ?? 'dummy scope',
    globalName: opts.globalName,
  })
}
