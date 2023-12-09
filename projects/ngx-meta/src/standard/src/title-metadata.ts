import { Injectable } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { StandardMetadataValues } from './standard-metadata-values'
import { StandardMetadata } from './standard-metadata'

@Injectable()
export class TitleMetadata extends StandardMetadata<'title'> {
  constructor(private readonly titleService: Title) {
    super({ name: 'title', globalName: 'title' })
  }

  set(value: StandardMetadataValues['title']): void {
    this.titleService.setTitle(value ?? '')
  }
}
