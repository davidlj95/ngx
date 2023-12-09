export class MetadataDefinition<
  Name extends string = string,
  GlobalName extends string = string,
> {
  public readonly name: Name
  public readonly scope: string
  public readonly globalName?: GlobalName

  constructor({
    name,
    scope,
    globalName,
  }: {
    name: Name
    scope: string
    globalName?: GlobalName
  }) {
    this.name = name
    this.scope = scope
    this.globalName = globalName
  }

  public get id() {
    return [this.scope, this.name].join(SEPARATOR)
  }

  public get jsonPath(): ReadonlyArray<string> {
    return [...this.scope.split(SEPARATOR), this.name]
  }
}

const SEPARATOR = '.'
