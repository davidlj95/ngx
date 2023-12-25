import { InjectionToken } from '@angular/core'
import { MetadataValues } from './metadata-values'

export const DEFAULTS_TOKEN = new InjectionToken<MetadataValues>(
  ngDevMode ? 'Metadata defaults' : 'NgxMetaDefs',
)
