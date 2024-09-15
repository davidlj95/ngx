import { InjectionToken, Provider } from '@angular/core'
import { _BaseUrl } from './base-url'
import { Router } from '@angular/router'
import { ANGULAR_ROUTER_URL, AngularRouterUrl } from './angular-router-url'

export type _RelativeUrlResolver = (url: string | AngularRouterUrl) => string

export const _RELATIVE_URL_RESOLVER = new InjectionToken<_RelativeUrlResolver>(
  ngDevMode ? 'NgxMeta Relative URL Resolver' : 'NgxMetaRUR',
)

export const _provideRelativeUrlResolver: (baseUrl: _BaseUrl) => Provider = (
  baseUrl,
) => ({
  provide: _RELATIVE_URL_RESOLVER,
  useFactory:
    (router: Router): _RelativeUrlResolver =>
    (givenUrl) => {
      const relativeUrl =
        givenUrl === ANGULAR_ROUTER_URL ? router.url : givenUrl
      /* istanbul ignore next https://github.com/istanbuljs/istanbuljs/issues/719 */
      if (relativeUrl.length === 0) {
        return baseUrl
      }
      const baseUrlEndsWithSlash = baseUrl.endsWith('/')
      const relativeUrlStartsWithSlash = relativeUrl.startsWith('/')
      const pathToAppend =
        baseUrlEndsWithSlash && relativeUrlStartsWithSlash
          ? relativeUrl.slice(1)
          : !baseUrlEndsWithSlash && !relativeUrlStartsWithSlash
            ? `/${relativeUrl}`
            : relativeUrl
      return `${baseUrl}${pathToAppend}`
    },
  deps: [Router],
})
