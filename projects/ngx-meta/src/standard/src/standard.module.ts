import { NgModule } from '@angular/core'
import { Metadata, NgxMetaCoreModule } from '@davidlj95/ngx-meta/core'
import { TitleMetadata } from './title-metadata'
import { DescriptionMetadata } from './description-metadata'
import { AuthorMetadata } from './author-metadata'
import { KeywordsMetadata } from './keywords-metadata'
import { GeneratorMetadata } from './generator-metadata'
import { ApplicationNameMetadata } from './application-name-metadata'
import { CanonicalUrlMetadata } from './canonical-url-metadata'
import { LinkRelCanonicalService } from './link-rel-canonical/link-rel-canonical.service'
import { LocaleMetadata } from './locale-metadata'
import { HtmlLangAttributeService } from './html-lang-attribute/html-lang-attribute.service'

@NgModule({
  imports: [NgxMetaCoreModule],
  providers: [
    {
      provide: Metadata,
      useClass: TitleMetadata,
      multi: true,
    },
    {
      provide: Metadata,
      useClass: DescriptionMetadata,
      multi: true,
    },
    {
      provide: Metadata,
      useClass: AuthorMetadata,
      multi: true,
    },
    {
      provide: Metadata,
      useClass: KeywordsMetadata,
      multi: true,
    },
    {
      provide: Metadata,
      useClass: GeneratorMetadata,
      multi: true,
    },
    {
      provide: Metadata,
      useClass: ApplicationNameMetadata,
      multi: true,
    },
    {
      provide: Metadata,
      useClass: CanonicalUrlMetadata,
      multi: true,
    },
    LinkRelCanonicalService,
    {
      provide: Metadata,
      useClass: LocaleMetadata,
      multi: true,
    },
    HtmlLangAttributeService,
  ],
})
export class StandardModule {}
