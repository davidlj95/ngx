import { ANGULAR_ROUTER_URL } from './angular-router-url'
import { _formatDevMessage } from '../messaging'
import { MODULE_NAME } from '../module-name'
import {
  _RELATIVE_URL_RESOLVER,
  _RelativeUrlResolver,
} from './relative-url-resolver'
import { Provider } from '@angular/core'

export const __noOpRelativeUrlResolver: _RelativeUrlResolver = (url) => {
  ngDevMode &&
    url === ANGULAR_ROUTER_URL &&
    console.warn(
      _formatDevMessage(
        'In order to use Angular router URLs to form an absolute URL, relative URL resolution is needed. ' +
          'Provide a base URL to enable URL resolution.',
        {
          module: MODULE_NAME,
          link: 'https://ngx-meta.dev/guides/url-resolution/',
        },
      ),
    )
  return url.toString()
}

export const _NO_OP_RELATIVE_URL_RESOLVER_PROVIDER: Provider = {
  provide: _RELATIVE_URL_RESOLVER,
  useValue: __noOpRelativeUrlResolver,
}
