import { MetadataDefinition } from './metadata-definition'

export class ScopedMetadataDefinition<
  Scope extends string = string,
  Name extends string = string,
  Global extends string = string,
> implements MetadataDefinition<Global>
{
  constructor(
    public readonly scope: Scope,
    public readonly name: Name,
    public readonly global?: Global,
  ) {}

  public get id() {
    return [this.scope, this.name].join(SEPARATOR)
  }

  public get jsonPath(): ReadonlyArray<string> {
    return [...this.scope.split(SEPARATOR), this.name]
  }
}

const SEPARATOR = '.'
