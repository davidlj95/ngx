import { makeStandardMetadataProvider } from './make-standard-metadata-provider'
import { Standard } from './standard'
import { HtmlLangAttributeService } from './html-lang-attribute/html-lang-attribute.service'

const KEY: keyof Standard = 'locale'

export const STANDARD_LOCALE_METADATA_PROVIDER = makeStandardMetadataProvider(
  KEY,
  {
    g: KEY,
    s: (htmlLangAttributeService: HtmlLangAttributeService) => (value) =>
      htmlLangAttributeService.set(value),
    d: [HtmlLangAttributeService],
  },
)
