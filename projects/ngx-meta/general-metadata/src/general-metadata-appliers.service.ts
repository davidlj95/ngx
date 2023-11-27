import { EventEmitter, Injectable, VERSION } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { StandardMetaProperty } from './standard-meta-property'
import { HtmlLangAttributeService } from './html-lang-attribute/html-lang-attribute.service'
import { GeneralMetadataImage } from './general-metadata-image'
import { GeneralMetadata } from './general-metadata'
import { LinkRelCanonicalService } from './link-rel-canonical/link-rel-canonical.service'
import { _MetadataAppliers, _MetaService } from '@davidlj95/ngx-meta/common'

/**
 * Implements how each metadata is applied to the DOM
 *
 * Does not inject defaults. To inject defaults, use [GeneralMetadataService]
 */
@Injectable()
export class GeneralMetadataAppliersService
  implements _MetadataAppliers<GeneralMetadata>
{
  public readonly changes$ = new EventEmitter<GeneralMetadata>()

  constructor(
    private titleService: Title,
    private metaService: _MetaService,
    private linkRelCanonicalService: LinkRelCanonicalService,
    private htmlLangAttributeService: HtmlLangAttributeService,
  ) {}

  title(title: string | undefined | null) {
    if (title !== undefined && title !== null) {
      this.titleService.setTitle(title)
    }
    this.changes$.emit({ title })
  }

  description(description: string | undefined | null) {
    this.metaService.apply(StandardMetaProperty.DESCRIPTION, description)
    this.changes$.emit({ description })
  }

  author(author: string | undefined | null) {
    this.metaService.apply(StandardMetaProperty.AUTHOR, author)
  }

  keywords(keywords: readonly string[] | undefined | null) {
    this.metaService.apply(
      StandardMetaProperty.KEYWORDS,
      keywords ? keywords.join(',') : keywords,
    )
  }

  generator(generator: boolean | undefined | null) {
    this.metaService.apply(
      StandardMetaProperty.GENERATOR,
      generator === true
        ? `Angular v${VERSION.full}`
        : generator === false
          ? undefined
          : generator,
    )
  }

  applicationName(applicationName: string | undefined | null) {
    this.metaService.apply(
      StandardMetaProperty.APPLICATION_NAME,
      applicationName,
    )
    this.changes$.emit({ applicationName })
  }

  canonicalUrl(canonicalUrl: URL | string | undefined | null) {
    this.linkRelCanonicalService.apply(canonicalUrl)
    this.changes$.emit({ canonicalUrl })
  }

  locale(locale: string | undefined | null) {
    this.htmlLangAttributeService.apply(locale)
    this.changes$.emit({ locale })
  }

  image(image: GeneralMetadataImage | null | undefined) {
    this.changes$.emit({ image })
  }
}
