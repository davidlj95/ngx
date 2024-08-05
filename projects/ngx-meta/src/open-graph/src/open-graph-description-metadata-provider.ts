import { makeOpenGraphMetadataProvider } from './make-open-graph-metadata-provider'
import {
  _GLOBAL_DESCRIPTION,
  _maybeTooLongDevMessage,
  NgxMetaMetaService,
} from '@davidlj95/ngx-meta/core'
import { OpenGraph } from './open-graph'
import { makeOpenGraphMetaDefinition } from './make-open-graph-meta-definition'

/**
 * Manages the {@link OpenGraph.description} metadata
 * @public
 */
export const OPEN_GRAPH_DESCRIPTION_METADATA_PROVIDER =
  makeOpenGraphMetadataProvider(_GLOBAL_DESCRIPTION, {
    g: _GLOBAL_DESCRIPTION,
    s:
      (metaService: NgxMetaMetaService) =>
      (description: OpenGraph['description']) => {
        /* istanbul ignore next */
        if (ngDevMode) {
          _maybeTooLongDevMessage(description, 300)
        }
        metaService.set(
          makeOpenGraphMetaDefinition(_GLOBAL_DESCRIPTION),
          description,
        )
      },
  })
