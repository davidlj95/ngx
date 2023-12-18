import { Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { StandardMetadata } from './standard-metadata'
import { BaseStandardMetadata } from './base-standard-metadata'

const KEY = 'title'

@Injectable()
export class TitleStandardMetadata extends BaseStandardMetadata<typeof KEY> {
  constructor(private readonly titleService: Title) {
    super(KEY, KEY)
  }

  set(value: StandardMetadata[typeof KEY]): void {
    if (value === undefined || value === null) {
      return
    }
    this.titleService.setTitle(value ?? '')
  }
}
