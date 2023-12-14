import { Metadata } from './metadata'
import { Provider, Type } from '@angular/core'

export function provideMetadata<M extends Type<Metadata<unknown>>>(
  klass: M,
): Provider {
  return {
    provide: Metadata,
    useClass: klass,
    multi: true,
  }
}
