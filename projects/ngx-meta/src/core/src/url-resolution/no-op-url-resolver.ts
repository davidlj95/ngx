import { ANGULAR_ROUTER_URL } from './angular-router-url'
import { _formatDevMessage } from '../messaging'
import { MODULE_NAME } from '../module-name'
import { _UrlResolver } from './url-resolver'

export const noOpUrlResolver: _UrlResolver = (url) => {
  /* istanbul ignore next https://github.com/istanbuljs/istanbuljs/issues/719 */
  if (ngDevMode && url === ANGULAR_ROUTER_URL) {
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
  }
  return !url ? url : url.toString()
}
