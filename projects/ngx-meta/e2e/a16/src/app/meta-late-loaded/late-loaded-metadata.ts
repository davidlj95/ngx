import {
  makeKeyValMetaDefinition,
  makeMetadataSetterProviderFromFactory,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import LATE_LOADED_METADATA_JSON from '../../../../cypress/fixtures/late-loaded-metadata.json'

type LateLoadedMetadata = typeof LATE_LOADED_METADATA_JSON

export const provideLateLoadedMetadata = () =>
  makeMetadataSetterProviderFromFactory<string | undefined>(
    (metaService: NgxMetaMetaService) => (value) => {
      metaService.set(
        makeKeyValMetaDefinition({
          keyName: LATE_LOADED_METADATA_JSON.lateLoadedMetadata.name,
        }),
        value,
      )
    },
    {
      d: [NgxMetaMetaService],
      jP: [
        'lateLoadedMetadata' satisfies keyof LateLoadedMetadata,
        'content' satisfies keyof LateLoadedMetadata['lateLoadedMetadata'],
      ],
    },
  )

export { LATE_LOADED_METADATA_JSON }
