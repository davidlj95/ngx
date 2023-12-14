import { NgModule } from '@angular/core'
import { Metadata, NgxMetaCoreModule } from '@davidlj95/ngx-meta/core'
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

@NgModule({
  imports: [NgxMetaCoreModule],
  providers: [
    {
      provide: Metadata,
      useClass: TitleStandardMetadata,
      multi: true,
    },
    {
      provide: Metadata,
      useClass: DescriptionStandardMetadata,
      multi: true,
    },
    {
      provide: Metadata,
      useClass: AuthorStandardMetadata,
      multi: true,
    },
    {
      provide: Metadata,
      useClass: KeywordsStandardMetadata,
      multi: true,
    },
    {
      provide: Metadata,
      useClass: GeneratorStandardMetadata,
      multi: true,
    },
    {
      provide: Metadata,
      useClass: ApplicationNameStandardMetadata,
      multi: true,
    },
    {
      provide: Metadata,
      useClass: CanonicalUrlStandardMetadata,
      multi: true,
    },
    LinkRelCanonicalService,
    {
      provide: Metadata,
      useClass: LocaleStandardMetadata,
      multi: true,
    },
    HtmlLangAttributeService,
  ],
})
export class StandardModule {}
