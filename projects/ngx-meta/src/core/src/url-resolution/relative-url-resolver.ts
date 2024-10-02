import { InjectionToken } from '@angular/core'
import { AngularRouterUrl } from './angular-router-url'
import { noOpRelativeUrlResolver } from './no-op-relative-url-resolver'

export type RelativeUrlResolver = (url: string | AngularRouterUrl) => string

export const RELATIVE_URL_RESOLVER = new InjectionToken<RelativeUrlResolver>(
  ngDevMode ? 'NgxMeta Relative URL Resolver' : 'NgxMetaRUR',
  {
    factory: () => noOpRelativeUrlResolver,
  },
)
