import { Inject, Injectable } from '@angular/core'
import { DOCUMENT } from '@angular/common'

@Injectable()
export class JsonLdService {
  private readonly SCRIPT_TYPE = 'application/ld+json'

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  apply(jsonLd: object | undefined | null) {
    if (jsonLd === undefined) {
      return
    }

    const existingScriptElement = this.getElement()
    if (existingScriptElement) {
      this.document.head.removeChild(existingScriptElement)
    }

    if (jsonLd === null) {
      return
    }

    const scriptElement = this.document.createElement('script')
    scriptElement.setAttribute('type', this.SCRIPT_TYPE)
    scriptElement.innerHTML = JSON.stringify(jsonLd)
    this.document.head.appendChild(scriptElement)
  }

  private getElement(): HTMLScriptElement | null {
    return this.document.head.querySelector(
      `script[type='${this.SCRIPT_TYPE}']`,
    )
  }
}
