import { MetaDefinition } from '@angular/platform-browser'
import { MetaCommandContent } from './meta-command-content'
import { MetaCommandProperty } from './meta-command-property'

export class MetaCommand<P extends MetaCommandProperty> {
  constructor(
    public readonly property: P,
    public readonly content: MetaCommandContent,
  ) {}

  public get definition(): MetaDefinition {
    if (this.content === undefined || this.content === null) {
      throw new Error(`Cannot generate meta definition for meta
          command ${this.property.selector}: content is ${this.content}`)
    }
    return {
      [this.property.attribute]: this.property.name,
      content: this.content,
    }
  }
}
