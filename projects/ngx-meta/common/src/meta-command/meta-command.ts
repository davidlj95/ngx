import { MetaDefinition } from '@angular/platform-browser'
import { MetaContent } from './meta-content'
import { MetaProperty } from './meta-property'

export class MetaCommand<P extends MetaProperty> {
  constructor(
    public readonly property: P,
    public readonly content: MetaContent,
  ) {}

  public get definition(): MetaDefinition {
    if (this.content === undefined || this.content === null) {
      throw new Error(`Cannot generate meta definition for meta
          command ${this.property.selector}: content is ${this.content}`)
    }
    return {
      [this.property.keyAttribute]: this.property.keyName,
      content: this.content,
    }
  }
}
