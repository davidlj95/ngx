import { Injectable } from '@angular/core'
import { MetaProperty } from './meta-property'
import { Meta } from '@angular/platform-browser'
import { MetaContent } from './meta-content'

@Injectable()
export class MetaCommandService {
  constructor(private readonly meta: Meta) {}

  newApply(property: MetaProperty, content: MetaContent) {
    switch (content) {
      case undefined:
      case null:
        this.meta.removeTag(property.selector)
        return
      default:
        this.meta.updateTag({
          [property.keyAttribute]: property.keyName,
          [property.contentAttribute]: content,
        })
    }
  }
}
