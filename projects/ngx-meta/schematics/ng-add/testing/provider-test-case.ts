export class ProviderTestCase {
  readonly name: string
  readonly symbol: string
  readonly code: string
  readonly entrypoint: string

  constructor(opts: {
    name: string
    symbol: string
    code?: string
    entrypoint?: string
  }) {
    this.name = opts.name
    this.symbol = opts.symbol
    this.code = opts.code ?? `${this.symbol}()`
    this.entrypoint = opts.entrypoint ?? this.name
  }
}
