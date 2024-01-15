import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import { HtmlLangAttributeService } from './html-lang-attribute/html-lang-attribute.service'
import { GLOBAL_LOCALE } from '@davidlj95/ngx-meta/core'

export const STANDARD_LOCALE_METADATA_PROVIDER = makeStandardMetadataProvider(
  GLOBAL_LOCALE,
  {
    g: GLOBAL_LOCALE,
    s: (htmlLangAttributeService: HtmlLangAttributeService) => (value) =>
      htmlLangAttributeService.set(value),
    d: [HtmlLangAttributeService],
  },
)
