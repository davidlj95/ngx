import {
  _provideNgxMetaModuleManager,
  _ProvideNgxMetaModuleManagerOptions,
  withOptions,
} from '@davidlj95/ngx-meta/core'
import { Standard, StandardMetadata } from '../types'

export const STANDARD_KEY = 'standard' satisfies keyof StandardMetadata

export const provideStandardManager = <Key extends keyof Standard>(
  key: Key,
  ...options: readonly _ProvideNgxMetaModuleManagerOptions<Standard[Key]>[]
) =>
  _provideNgxMetaModuleManager<Standard, Key>(
    key,
    [STANDARD_KEY],
    withOptions(...options),
  )
