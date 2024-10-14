import {
  NgxMetaElementsService,
  provideNgxMetaManager,
  withContentAttribute,
  withManagerDeps,
  withNameAttribute,
} from '@davidlj95/ngx-meta/core'
import CUSTOM_METADATA_JSON from '@/e2e/cypress/fixtures/custom-metadata.json'

export const provideCustomMetadataManager = () =>
  provideNgxMetaManager<string | undefined>(
    'custom.title',
    (metaElementsService: NgxMetaElementsService) => (value) => {
      metaElementsService.set(
        withNameAttribute(CUSTOM_METADATA_JSON.custom.keyName),
        withContentAttribute(value),
      )
    },
    withManagerDeps(NgxMetaElementsService),
  )

export { CUSTOM_METADATA_JSON }
