import {
  _GLOBAL_TITLE,
  _titleFormatter,
  _withModuleManagerSameGlobalKey,
  _withModuleManagerSetterFactory,
  NgxMetaElementsService,
  TitleFormatter,
  withContentAttribute,
  withManagerDeps,
} from '@davidlj95/ngx-meta/core'
import { provideOpenGraphManager } from '../../utils/provide-open-graph-manager'
import { withOpenGraphPropertyAttribute } from '../../utils/with-open-graph-property-attribute'

/**
 * Manages the {@link OpenGraph.title} metadata
 * @public
 */
export const provideOpenGraphTitle = () =>
  provideOpenGraphManager(
    _GLOBAL_TITLE,
    _withModuleManagerSameGlobalKey(),
    withManagerDeps(NgxMetaElementsService, _titleFormatter()),
    _withModuleManagerSetterFactory(
      (
        metaElementsService: NgxMetaElementsService,
        titleFormatter: TitleFormatter,
      ) =>
        (title) => {
          metaElementsService.set(
            withOpenGraphPropertyAttribute(_GLOBAL_TITLE),
            withContentAttribute(title ? titleFormatter(title) : title),
          )
        },
    ),
  )

/**
 * {@inheritDoc provideOpenGraphTitle}
 * @deprecated Use {@link provideOpenGraphTitle} instead
 * @public
 */
export const OPEN_GRAPH_TITLE_METADATA_PROVIDER =
  /* @__PURE__ */
  provideOpenGraphTitle()
