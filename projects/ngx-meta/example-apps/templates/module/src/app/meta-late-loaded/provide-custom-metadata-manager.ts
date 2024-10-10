import {
  makeMetadataManagerProviderFromSetterFactory,
  NgxMetaElementsService,
  withContentAttribute,
  withNameAttribute,
} from '@davidlj95/ngx-meta/core'
import CUSTOM_METADATA_JSON from '@/e2e/cypress/fixtures/custom-metadata.json'

type CustomMetadata = typeof CUSTOM_METADATA_JSON

export const provideCustomMetadataManager = () =>
  makeMetadataManagerProviderFromSetterFactory<string | undefined>(
    (metaElementsService: NgxMetaElementsService) => (value) => {
      metaElementsService.set(
        withNameAttribute(CUSTOM_METADATA_JSON.custom.keyName),
        withContentAttribute(value),
      )
    },
    {
      d: [NgxMetaElementsService],
      jP: [
        'custom' satisfies keyof CustomMetadata,
        'title' satisfies keyof CustomMetadata['custom'],
      ],
    },
  )

export { CUSTOM_METADATA_JSON }
