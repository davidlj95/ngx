import { StandardMetadata } from './standard-metadata'
import { Injectable } from '@angular/core'
import { BaseStandardMetadata } from './base-standard-metadata'
import { HtmlLangAttributeService } from './html-lang-attribute/html-lang-attribute.service'

const KEY = 'locale'

@Injectable()
export class LocaleStandardMetadata extends BaseStandardMetadata<typeof KEY> {
  constructor(
    private readonly htmlLangAttributeService: HtmlLangAttributeService,
  ) {
    super(KEY, KEY)
  }

  set(value: StandardMetadata[typeof KEY]): void {
    this.htmlLangAttributeService.set(value)
  }
}
