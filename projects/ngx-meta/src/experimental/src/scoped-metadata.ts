import { Metadata } from './metadata'
import { MetadataDefinition } from './metadata-definition'

export abstract class ScopedMetadata<
  S,
  K extends StringKeyOf<S>,
> extends Metadata<S[K]> {
  public readonly definition: MetadataDefinition<K>

  protected constructor({
    name,
    scope,
    globalName,
  }: {
    name: K
    scope: string
    globalName?: string
  }) {
    super()
    this.definition = {
      name,
      scope,
      globalName,
    }
  }
}

type StringKeyOf<T> = keyof T extends string ? keyof T : never
