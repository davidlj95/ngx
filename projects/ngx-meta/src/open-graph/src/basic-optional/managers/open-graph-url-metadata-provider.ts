import { makeOpenGraphMetadataProvider } from '../../utils/make-open-graph-metadata-provider'
import {
  _GLOBAL_CANONICAL_URL,
  _maybeNonHttpUrlDevMessage,
  _urlResolver,
  _UrlResolver,
  NgxMetaElementsService,
  withContentAttribute,
} from '@davidlj95/ngx-meta/core'
import { OpenGraph } from '../../types'
import { MODULE_NAME } from '../../module-name'
import { withOpenGraphPropertyAttribute } from '../../utils/with-open-graph-property-attribute'

export const OPEN_GRAPH_URL_SETTER_FACTORY =
  (metaElementsService: NgxMetaElementsService, urlResolver: _UrlResolver) =>
  (url: OpenGraph[typeof KEY]) => {
    const resolvedUrl = urlResolver(url)
    ngDevMode &&
      _maybeNonHttpUrlDevMessage(resolvedUrl, {
        module: MODULE_NAME,
        property: KEY,
        value: resolvedUrl,
        link: 'https://ogp.me/#metadata',
      })
    metaElementsService.set(
      withOpenGraphPropertyAttribute(KEY),
      withContentAttribute(urlResolver(url)),
    )
  }

const KEY = 'url' satisfies keyof OpenGraph

/**
 * Manages the {@link OpenGraph.url} metadata
 * @public
 */
export const OPEN_GRAPH_URL_METADATA_PROVIDER = makeOpenGraphMetadataProvider(
  KEY,
  {
    g: _GLOBAL_CANONICAL_URL,
    s: OPEN_GRAPH_URL_SETTER_FACTORY,
    d: [NgxMetaElementsService, _urlResolver()],
  },
)
