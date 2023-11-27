import { Injectable } from '@angular/core'
import { MetaCommand } from './meta-command'
import { MetaProperty } from './meta-property'
import { Meta } from '@angular/platform-browser'

@Injectable()
export class MetaCommandService {
  constructor(private readonly meta: Meta) {}

  public apply(metaCommand: MetaCommand<MetaProperty>) {
    switch (metaCommand.content) {
      case undefined:
      case null:
        this.meta.removeTag(metaCommand.property.selector)
        return
      default:
        this.meta.updateTag(metaCommand.definition)
    }
  }
}
