import { inject, InjectionToken } from '@angular/core'
import { MetadataValues } from '../service/metadata-values'

export const DEFAULTS = new InjectionToken<MetadataValues>(
  ngDevMode ? 'NgxMeta Metadata defaults' : 'NgxMetaDefs',
)

export const injectDefaults = (): MetadataValues | null =>
  inject(DEFAULTS, { optional: true })
