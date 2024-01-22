import { Injectable } from '@angular/core'
import { Meta, MetaDefinition } from '@angular/platform-browser'

@Injectable({ providedIn: 'root' })
export class NgxMetaMetaService {
  constructor(private readonly meta: Meta) {}

  set(definition: NgxMetaMetaDefinition, content: NgxMetaMetaContent) {
    switch (content) {
      case undefined:
      case null:
        this.meta.removeTag(definition.selector)
        return
      default:
        this.meta.updateTag(definition.withContent(content))
    }
  }
}
export interface NgxMetaMetaDefinition {
  readonly withContent: (content: string) => MetaDefinition
  readonly selector: string
}
export type NgxMetaMetaContent = string | undefined | null
