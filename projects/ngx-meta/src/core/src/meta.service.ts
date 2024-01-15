import { Injectable } from '@angular/core'
import { MetaProperty } from './meta-property'
import { Meta } from '@angular/platform-browser'
import { MetaContent } from './meta-content'

@Injectable({ providedIn: 'root' })
export class MetaService {
  constructor(private readonly meta: Meta) {}

  set(property: MetaProperty, content: MetaContent) {
    switch (content) {
      case undefined:
      case null:
        this.meta.removeTag(property.selector)
        return
      default:
        this.meta.updateTag({
          [property.keyAttr]: property.keyName,
          [property.valAttr]: content,
        })
    }
  }
}
