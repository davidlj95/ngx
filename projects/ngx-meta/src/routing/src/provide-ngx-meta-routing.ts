import { EnvironmentProviders, Provider } from '@angular/core'
import { ROUTING_PROVIDERS } from './routing-providers'

export const provideNgxMetaRouting = (): EnvironmentProviders | Provider[] =>
  ROUTING_PROVIDERS
