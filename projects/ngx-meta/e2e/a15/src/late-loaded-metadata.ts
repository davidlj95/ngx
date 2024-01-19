import {
  makeMetadata,
  MetaProperty,
  MetaService,
  provideMetadataFactory,
} from '@davidlj95/ngx-meta/core'
import LATE_LOADED_METADATA_JSON from '../../cypress/fixtures/late-loaded-metadata.json'

type LateLoadedMetadata = typeof LATE_LOADED_METADATA_JSON

export const provideLateLoadedMetadata = () =>
  provideMetadataFactory<string | undefined>(
    makeMetadata([
      'lateLoadedMetadata' satisfies keyof LateLoadedMetadata,
      'content' satisfies keyof LateLoadedMetadata['lateLoadedMetadata'],
    ]),
    (metaService: MetaService) => (value) => {
      metaService.set(
        new MetaProperty({
          keyName: LATE_LOADED_METADATA_JSON.lateLoadedMetadata.name,
        }),
        value,
      )
    },
    [MetaService],
  )

export { LATE_LOADED_METADATA_JSON }
