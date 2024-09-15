import { makeOpenGraphMetadataProvider } from '../../utils/make-open-graph-metadata-provider'
import {
  _GLOBAL_CANONICAL_URL,
  _maybeNonHttpUrlDevMessage,
  _URL_RESOLVER,
  _UrlResolver,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { makeOpenGraphMetaDefinition } from '../../utils/make-open-graph-meta-definition'
import { OpenGraph } from '../../types'
import { MODULE_NAME } from '../../module-name'

export const OPEN_GRAPH_URL_SETTER_FACTORY =
  (metaService: NgxMetaMetaService, urlResolver: _UrlResolver) =>
  (url: OpenGraph[typeof KEY]) => {
    const resolvedUrl = urlResolver(url)
    ngDevMode &&
      _maybeNonHttpUrlDevMessage(resolvedUrl, {
        module: MODULE_NAME,
        property: KEY,
        value: resolvedUrl,
        link: 'https://ogp.me/#metadata',
      })
    metaService.set(makeOpenGraphMetaDefinition(KEY), urlResolver(url))
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
    d: [NgxMetaMetaService, _URL_RESOLVER],
  },
)
