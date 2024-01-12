import { Inject, Injectable } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { BaseGlobalMetadata, GlobalMetadata } from '@davidlj95/ngx-meta/core'

const KEY = 'jsonLd'

@Injectable()
export class JsonLdMetadata extends BaseGlobalMetadata<typeof KEY> {
  private readonly SCRIPT_TYPE = 'application/ld+json'

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    super(KEY)
  }

  set(jsonLd: GlobalMetadata[typeof KEY]) {
    const existingScriptElement = this.getElement()
    if (existingScriptElement) {
      this.document.head.removeChild(existingScriptElement)
    }

    if (jsonLd === null || jsonLd === undefined) {
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
