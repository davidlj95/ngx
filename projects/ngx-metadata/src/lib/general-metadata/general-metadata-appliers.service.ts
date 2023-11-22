import { EventEmitter, Injectable, VERSION } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { MetaCommandService } from '../common/meta-command/meta-command.service'
import { MetaCommand } from '../common/meta-command/meta-command'
import { StandardMetaProperty } from './standard-meta-property'
import { HtmlLangAttributeService } from './html-lang-attribute/html-lang-attribute.service'
import { GeneralMetadataImage } from './general-metadata-image'
import { MetadataAppliers } from '../common/metadata-appliers'
import { GeneralMetadata } from './general-metadata'
import { LinkRelCanonicalService } from './link-rel-canonical/link-rel-canonical.service'

/**
 * Implements how each metadata is applied to the DOM
 *
 * Does not inject defaults. To inject defaults, use [GeneralMetadataService]
 */
@Injectable()
export class GeneralMetadataAppliersService
  implements MetadataAppliers<GeneralMetadata>
{
  public readonly changes$ = new EventEmitter<GeneralMetadata>()

  constructor(
    private titleService: Title,
    private metaCommandService: MetaCommandService,
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
    this.metaCommandService.apply(
      new MetaCommand(StandardMetaProperty.DESCRIPTION, description),
    )
    this.changes$.emit({ description })
  }

  author(author: string | undefined | null) {
    this.metaCommandService.apply(
      new MetaCommand(StandardMetaProperty.AUTHOR, author),
    )
  }

  keywords(keywords: readonly string[] | undefined | null) {
    this.metaCommandService.apply(
      new MetaCommand(
        StandardMetaProperty.KEYWORDS,
        keywords ? keywords.join(',') : keywords,
      ),
    )
  }

  generator(generator: boolean | undefined | null) {
    this.metaCommandService.apply(
      new MetaCommand(
        StandardMetaProperty.GENERATOR,
        generator === true
          ? `Angular v${VERSION.full}`
          : generator === false
            ? undefined
            : generator,
      ),
    )
  }

  applicationName(applicationName: string | undefined | null) {
    this.metaCommandService.apply(
      new MetaCommand(StandardMetaProperty.APPLICATION_NAME, applicationName),
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
