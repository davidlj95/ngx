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
    if (!value) {
      console.log('Not setting title')
      return
    }
    console.log(`Setting title to ${value}`)
    this.titleService.setTitle(value.toString())
  }
}
