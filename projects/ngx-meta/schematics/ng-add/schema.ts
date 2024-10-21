export interface Schema {
  project: string
  routing: boolean
  metadataModules: ReadonlyArray<MetadataModules>
}

export type MetadataModules =
  | 'json-ld'
  | 'open-graph'
  | 'open-graph-profile'
  | 'standard'
  | 'twitter-card'
