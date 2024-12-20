import {
  _provideNgxMetaModuleManager,
  _ProvideNgxMetaModuleManagerOptions,
  withOptions,
} from '@davidlj95/ngx-meta/core'
import { Standard, StandardMetadata } from '../types'

export const provideStandardManager = <Key extends keyof Standard>(
  key: Key,
  ...options: readonly _ProvideNgxMetaModuleManagerOptions<Standard[Key]>[]
) =>
  _provideNgxMetaModuleManager<Standard, Key>(
    key,
    ['standard' satisfies keyof StandardMetadata],
    withOptions(...options),
  )
