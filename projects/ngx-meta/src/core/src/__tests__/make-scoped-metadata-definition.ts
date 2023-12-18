import { MetadataDefinition } from '../metadata-definition'
import { ScopedMetadataDefinition } from '../scoped-metadata-definition'

export function makeScopedMetadataDefinition(
  opts: {
    scope?: string
    name?: string
    global?: string
  } = {},
): MetadataDefinition {
  return new ScopedMetadataDefinition(
    opts.scope ?? 'dummy scope',
    opts.name ?? 'dummy name',
    opts.global,
  )
}
