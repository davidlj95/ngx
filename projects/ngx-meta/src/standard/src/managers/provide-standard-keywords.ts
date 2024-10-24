import { Standard } from '../types'
import {
  _withModuleManagerSetterFactory,
  NgxMetaElementsService,
  withContentAttribute,
  withNameAttribute,
} from '@davidlj95/ngx-meta/core'
import { provideStandardManager } from '../utils/provide-standard-manager'

const KEY = 'keywords' satisfies keyof Standard

/**
 * Manages the {@link Standard.keywords} metadata
 * @public
 */
export const provideStandardKeywords = () =>
  provideStandardManager(
    KEY,
    _withModuleManagerSetterFactory(
      (metaElementsService: NgxMetaElementsService) => (value) =>
        metaElementsService.set(
          withNameAttribute(KEY),
          withContentAttribute(value?.join(',')),
        ),
    ),
  )
