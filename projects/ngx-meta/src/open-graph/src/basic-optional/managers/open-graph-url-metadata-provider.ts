import {
  _GLOBAL_CANONICAL_URL,
  _maybeNonHttpUrlDevMessage,
  _urlResolver,
  _UrlResolver,
  _withModuleManagerSetterFactory,
  NgxMetaElementsService,
  withContentAttribute,
  withManagerDeps,
  withManagerGlobal,
} from '@davidlj95/ngx-meta/core'
import { OpenGraph } from '../../types'
import { MODULE_NAME } from '../../module-name'
import { withOpenGraphPropertyAttribute } from '../../utils/with-open-graph-property-attribute'
import { provideOpenGraphManager } from '../../utils/provide-open-graph-manager'

const KEY = 'url' satisfies keyof OpenGraph

/**
 * Manages the {@link OpenGraph.url} metadata
 * @public
 */
export const OPEN_GRAPH_URL_METADATA_PROVIDER = provideOpenGraphManager(
  KEY,
  withManagerGlobal(_GLOBAL_CANONICAL_URL),
  withManagerDeps(NgxMetaElementsService, _urlResolver()),
  _withModuleManagerSetterFactory(
    (metaElementsService: NgxMetaElementsService, urlResolver: _UrlResolver) =>
      (url) => {
        const resolvedUrl = urlResolver(url)
        /* istanbul ignore next https://github.com/istanbuljs/istanbuljs/issues/719 */
        if (ngDevMode) {
          _maybeNonHttpUrlDevMessage(resolvedUrl, {
            module: MODULE_NAME,
            property: KEY,
            value: resolvedUrl,
            link: 'https://ogp.me/#metadata',
          })
        }
        metaElementsService.set(
          withOpenGraphPropertyAttribute(KEY),
          withContentAttribute(urlResolver(url)),
        )
      },
  ),
)
