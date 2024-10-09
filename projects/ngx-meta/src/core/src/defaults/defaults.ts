import { inject } from '@angular/core'
import { MetadataValues } from '../service'
import { _LazyInjectionToken, _makeInjectionToken } from '../utils'

export const defaults: _LazyInjectionToken<MetadataValues> = () =>
  _makeInjectionToken(ngDevMode ? 'Metadata defaults' : 'Defs')

export const injectDefaults = (): MetadataValues | null =>
  inject(defaults(), { optional: true })
