import { StandardMetadataValues } from './standard-metadata-values'
import { Injectable } from '@angular/core'
import { StandardMetadata } from './standard-metadata'
import { HtmlLangAttributeService } from './html-lang-attribute/html-lang-attribute.service'

@Injectable()
export class LocaleMetadata extends StandardMetadata<'locale'> {
  constructor(
    private readonly htmlLangAttributeService: HtmlLangAttributeService,
  ) {
    super({ name: 'locale', globalName: 'locale' })
  }

  set(value: StandardMetadataValues['locale']): void {
    this.htmlLangAttributeService.set(value)
  }
}
