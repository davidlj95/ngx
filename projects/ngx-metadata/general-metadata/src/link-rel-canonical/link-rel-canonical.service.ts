import { Inject, Injectable } from '@angular/core'
import { DOCUMENT } from '@angular/common'

/**
 * Manages the <link rel='canonical'> HTML meta tag
 *
 * @see https://support.google.com/webmasters/answer/10347851?hl=en
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel#canonical
 */
@Injectable()
export class LinkRelCanonicalService {
  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  apply(url: string | URL | undefined | null) {
    if (url === undefined) {
      return
    }
    const existingLinkElement = this.getElement()
    if (existingLinkElement) {
      this.document.head.removeChild(existingLinkElement)
    }
    if (url === null) {
      return
    }
    const linkElement = this.document.createElement('link')
    linkElement.setAttribute('rel', 'canonical')
    linkElement.setAttribute('href', url.toString())
    this.document.head.appendChild(linkElement)
  }

  private getElement(): HTMLLinkElement | null {
    return this.document.head.querySelector(`link[rel='canonical']`)
  }
}
