import { ANGULAR_ROUTER_URL } from './angular-router-url'
import { _formatDevMessage } from '../messaging'
import { MODULE_NAME } from '../module-name'
import { RelativeUrlResolver } from './relative-url-resolver'

export const noOpRelativeUrlResolver: RelativeUrlResolver = (url) => {
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
