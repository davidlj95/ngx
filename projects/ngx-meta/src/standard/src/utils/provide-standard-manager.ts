import {
  _provideNgxMetaModuleManager,
  _ProvideNgxMetaModuleManagerOptions,
  _withModuleManagerOptions,
  _withModuleManagerScope,
} from '@davidlj95/ngx-meta/core'
import { Standard, StandardMetadata } from '../types'

export const STANDARD_KEY = 'standard' satisfies keyof StandardMetadata

export const provideStandardManager = <Key extends keyof Standard>(
  key: Key,
  ...options: ReadonlyArray<_ProvideNgxMetaModuleManagerOptions<Standard[Key]>>
) =>
  _provideNgxMetaModuleManager<Standard, Key>(
    key,
    _withModuleManagerOptions(
      _withModuleManagerScope(STANDARD_KEY),
      ...options,
    ),
  )
