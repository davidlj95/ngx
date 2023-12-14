import { Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { StandardMetadata } from './standard-metadata'
import { BaseStandardMetadata } from './base-standard-metadata'

@Injectable()
export class TitleStandardMetadata extends BaseStandardMetadata<'title'> {
  constructor(private readonly titleService: Title) {
    super({ name: 'title', globalName: 'title' })
  }

  set(value: StandardMetadata['title']): void {
    if (value === undefined || value === null) {
      return
    }
    this.titleService.setTitle(value ?? '')
  }
}
