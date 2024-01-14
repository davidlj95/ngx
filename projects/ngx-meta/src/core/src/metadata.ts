export interface Metadata<Global extends string = string> {
  readonly id: string
  readonly jsonPath: ReadonlyArray<string>
  readonly global?: Global
}
