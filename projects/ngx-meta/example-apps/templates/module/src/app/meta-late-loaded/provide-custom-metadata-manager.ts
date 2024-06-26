import {
  makeKeyValMetaDefinition,
  makeMetadataManagerProviderFromSetterFactory,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import CUSTOM_METADATA_JSON from '@/e2e/cypress/fixtures/custom-metadata.json'

type CustomMetadata = typeof CUSTOM_METADATA_JSON

export const provideCustomMetadataManager = () =>
  makeMetadataManagerProviderFromSetterFactory<string | undefined>(
    (metaService: NgxMetaMetaService) => (value) => {
      metaService.set(
        makeKeyValMetaDefinition(CUSTOM_METADATA_JSON.custom.keyName),
        value,
      )
    },
    {
      d: [NgxMetaMetaService],
      jP: [
        'custom' satisfies keyof CustomMetadata,
        'title' satisfies keyof CustomMetadata['custom'],
      ],
    },
  )

export { CUSTOM_METADATA_JSON }
