import { Title } from '@angular/platform-browser'
import {
  _GLOBAL_TITLE,
  _isDefined,
  _titleFormatter,
  _withModuleManagerSameGlobalKey,
  _withModuleManagerSetterFactory,
  TitleFormatter,
  withManagerDeps,
} from '@davidlj95/ngx-meta/core'
import { provideStandardManager } from '../utils/provide-standard-manager'

/**
 * Manages the {@link Standard.title} metadata
 * @public
 */
export const provideStandardTitle = () =>
  provideStandardManager(
    _GLOBAL_TITLE,
    _withModuleManagerSameGlobalKey(),
    withManagerDeps(Title, _titleFormatter()),
    _withModuleManagerSetterFactory(
      (titleService: Title, titleFormatter: TitleFormatter) => (value) => {
        if (!_isDefined(value)) {
          return
        }
        titleService.setTitle(titleFormatter(value))
      },
    ),
  )

/**
 * {@inheritDoc provideStandardTitle}
 * @deprecated Use {@link provideStandardTitle} instead
 * @public
 */
export const STANDARD_TITLE_METADATA_PROVIDER =
  /* @__PURE__ */
  provideStandardTitle()
