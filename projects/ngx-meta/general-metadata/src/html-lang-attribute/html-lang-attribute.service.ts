import { Inject, Injectable } from '@angular/core'
import { DOCUMENT } from '@angular/common'

@Injectable()
export class HtmlLangAttributeService {
  private readonly attributeName = 'lang'

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  apply(locale: string | undefined | null) {
    if (locale === undefined) {
      return
    }
    const htmlElement = this.document.documentElement
    if (locale === null) {
      htmlElement.removeAttribute(this.attributeName)
      return
    }
    htmlElement.setAttribute(this.attributeName, locale)
  }
}
