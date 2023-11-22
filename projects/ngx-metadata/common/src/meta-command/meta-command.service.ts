import { Injectable } from '@angular/core'
import { MetaCommand } from './meta-command'
import { MetaCommandProperty } from './meta-command-property'
import { Meta } from '@angular/platform-browser'

@Injectable()
export class MetaCommandService {
  constructor(private readonly meta: Meta) {}

  public apply(metaCommand: MetaCommand<MetaCommandProperty>) {
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
