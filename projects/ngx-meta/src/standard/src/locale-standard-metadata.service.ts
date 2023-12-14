import { StandardMetadata } from './standard-metadata'
import { Injectable } from '@angular/core'
import { BaseStandardMetadata } from './base-standard-metadata'
import { HtmlLangAttributeService } from './html-lang-attribute/html-lang-attribute.service'

@Injectable()
export class LocaleStandardMetadata extends BaseStandardMetadata<'locale'> {
  constructor(
    private readonly htmlLangAttributeService: HtmlLangAttributeService,
  ) {
    super({ name: 'locale', globalName: 'locale' })
  }

  set(value: StandardMetadata['locale']): void {
    this.htmlLangAttributeService.set(value)
  }
}
