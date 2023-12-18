import { GlobalMetadataDefinition } from '../global-metadata-definition'

export function makeGlobalMetadataDefinition<Id extends string>(
  id?: Id,
): GlobalMetadataDefinition {
  return new GlobalMetadataDefinition(id ?? 'dummyId')
}
