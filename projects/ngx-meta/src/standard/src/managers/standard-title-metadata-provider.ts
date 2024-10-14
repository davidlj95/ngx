import { Title } from '@angular/platform-browser'
import {
  _GLOBAL_TITLE,
  _isDefined,
  _withModuleManagerSameGlobalKey,
  _withModuleManagerSetterFactory,
  withManagerDeps,
} from '@davidlj95/ngx-meta/core'
import { provideStandardManager } from '../utils/provide-standard-manager'

/**
 * Manages the {@link Standard.title} metadata
 * @public
 */
export const STANDARD_TITLE_METADATA_PROVIDER = provideStandardManager(
  _GLOBAL_TITLE,
  _withModuleManagerSameGlobalKey(),
  withManagerDeps(Title),
  _withModuleManagerSetterFactory((titleService: Title) => (value) => {
    if (!_isDefined(value)) {
      return
    }
    titleService.setTitle(value)
  }),
)
