import { Provider } from '@angular/core'
import { provideMetadata } from '@davidlj95/ngx-meta/core'
import { TitleStandardMetadata } from './title-standard-metadata.service'
import { DescriptionStandardMetadata } from './description-standard-metadata.service'
import { AuthorStandardMetadata } from './author-standard-metadata.service'
import { KeywordsStandardMetadata } from './keywords-standard-metadata.service'
import { GeneratorStandardMetadata } from './generator-standard-metadata.service'
import { ApplicationNameStandardMetadata } from './application-name-standard-metadata.service'
import { CanonicalUrlStandardMetadata } from './canonical-url-standard-metadata.service'
import { LinkRelCanonicalService } from './link-rel-canonical/link-rel-canonical.service'
import { LocaleStandardMetadata } from './locale-standard-metadata.service'
import { HtmlLangAttributeService } from './html-lang-attribute/html-lang-attribute.service'

export function provideStandard(): Provider[] {
  return [
    provideMetadata(TitleStandardMetadata),
    provideMetadata(DescriptionStandardMetadata),
    provideMetadata(AuthorStandardMetadata),
    provideMetadata(KeywordsStandardMetadata),
    provideMetadata(GeneratorStandardMetadata),
    provideMetadata(ApplicationNameStandardMetadata),
    provideMetadata(CanonicalUrlStandardMetadata),
    LinkRelCanonicalService,
    provideMetadata(LocaleStandardMetadata),
    HtmlLangAttributeService,
  ]
}
