import { InjectionToken } from '@angular/core'
import { GeneralMetadata } from './general-metadata'

export const GENERAL_METADATA_DEFAULTS_TOKEN =
  new InjectionToken<GeneralMetadata>('General metadata default values')
