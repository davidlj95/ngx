import { Inject, Injectable } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { StandardMetadataValues } from '../standard-metadata-values'

@Injectable()
export class HtmlLangAttributeService {
  private readonly attributeName = 'lang'

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  set(locale: StandardMetadataValues['locale']) {
    const htmlElement = this.document.documentElement
    if (locale === null || locale === undefined) {
      htmlElement.removeAttribute(this.attributeName)
      return
    }
    htmlElement.setAttribute(this.attributeName, locale)
  }
}
