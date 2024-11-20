import { Standard } from '../types'
import {
  _withModuleManagerSetterFactory,
  NgxMetaElementsService,
  withContentAttribute,
  withNameAttribute,
} from '@davidlj95/ngx-meta/core'
import { VERSION } from '@angular/core'
import { provideStandardManager } from '../utils/provide-standard-manager'

const KEY = 'generator' satisfies keyof Standard

/**
 * Manages the {@link Standard.generator} metadata
 * @public
 */
export const provideStandardGenerator = () =>
  provideStandardManager(
    KEY,
    _withModuleManagerSetterFactory(
      (metaElementsService: NgxMetaElementsService) => (value) =>
        metaElementsService.set(
          withNameAttribute(KEY),
          withContentAttribute(
            value === true ? `Angular v${VERSION.full}` : value,
          ),
        ),
    ),
  )

/**
 * {@inheritDoc provideStandardGenerator}
 * @deprecated Use {@link provideStandardGenerator} instead
 * @public
 */
export const STANDARD_GENERATOR_METADATA_PROVIDER =
  /* @__PURE__ */
  provideStandardGenerator()
