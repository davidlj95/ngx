import { inject, Provider } from '@angular/core'
import { BaseUrl } from './base-url'
import { _URL_RESOLVER, _UrlResolver } from './url-resolver'
import { ANGULAR_ROUTER_URL } from './angular-router-url'
import { Router } from '@angular/router'

export const provideDefaultUrlResolver: (baseUrl: BaseUrl) => Provider = (
  baseUrl,
) => ({
  provide: _URL_RESOLVER,
  useFactory: (): _UrlResolver => {
    const router = inject(Router)
    return (url) => {
      if (url === undefined || url === null) {
        return url
      }
      const urlString = url.toString()
      if (urlString.split('://').length > 1) {
        return urlString
      }
      const relativeUrl = url === ANGULAR_ROUTER_URL ? router.url : urlString
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
    }
  },
})
