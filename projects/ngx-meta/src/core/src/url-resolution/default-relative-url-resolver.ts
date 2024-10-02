import { BaseUrl } from './base-url'
import { Provider } from '@angular/core'
import { Router } from '@angular/router'
import { ANGULAR_ROUTER_URL } from './angular-router-url'
import {
  RELATIVE_URL_RESOLVER,
  RelativeUrlResolver,
} from './relative-url-resolver'

export const provideDefaultRelativeUrlResolver: (
  baseUrl: BaseUrl,
) => Provider = (baseUrl) => ({
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
