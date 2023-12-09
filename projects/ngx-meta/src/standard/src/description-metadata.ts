import { Injectable } from '@angular/core'
import { Meta } from '@angular/platform-browser'
import { StandardMetadataValues } from './standard-metadata-values'
import { StandardMetadata } from './standard-metadata'

@Injectable()
export class DescriptionMetadata extends StandardMetadata<'description'> {
  constructor(private readonly meta: Meta) {
    super({
      name: 'description',
      globalName: 'description',
    })
  }

  set(value: StandardMetadataValues['description']): void {
    if (!value) {
      this.meta.removeTag('name="description"')
      return
    }
    this.meta.updateTag({ name: this.definition.name, content: value })
  }
}
