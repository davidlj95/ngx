import { InjectionToken, Provider } from '@angular/core'
import { BaseUrl } from './base-url'
import { Router } from '@angular/router'
import { ANGULAR_ROUTER_URL, AngularRouterUrl } from './angular-router-url'

export type RelativeUrlResolver = (url: string | AngularRouterUrl) => string

export const RELATIVE_URL_RESOLVER = new InjectionToken<RelativeUrlResolver>(
  ngDevMode ? 'NgxMeta Relative URL Resolver' : 'NgxMetaRUR',
)

export const provideRelativeUrlResolver: (baseUrl: BaseUrl) => Provider = (
  baseUrl,
) => ({
  provide: RELATIVE_URL_RESOLVER,
  useFactory:
    (router: Router): RelativeUrlResolver =>
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
