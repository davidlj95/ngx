import { Inject, Injectable } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import {
  BaseMetadata,
  GlobalMetadata,
  MetadataDefinition,
} from '@davidlj95/ngx-meta/core'

@Injectable()
export class JsonLdMetadata extends BaseMetadata<
  object,
  'object',
  keyof GlobalMetadata
> {
  private readonly SCRIPT_TYPE = 'application/ld+json'

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    super(
      new MetadataDefinition({
        name: 'object',
        scope: 'jsonLd',
        globalName: 'jsonLd',
      }),
    )
  }

  set(jsonLd: GlobalMetadata['jsonLd']) {
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
