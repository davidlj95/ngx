import {
  _provideNgxMetaModuleManager,
  _ProvideNgxMetaModuleManagerOptions,
  _withModuleManagerNameAttribute,
  _withModuleManagerOptions,
  _withModuleManagerScope,
} from '@davidlj95/ngx-meta/core'
import { OpenGraph, OpenGraphMetadata } from '../types'
import { withOpenGraphPropertyAttribute } from './with-open-graph-property-attribute'

export const OPEN_GRAPH_KEY: keyof OpenGraphMetadata = 'openGraph'

export const provideOpenGraphManager = <Key extends keyof OpenGraph>(
  key: Key,
  ...options: ReadonlyArray<_ProvideNgxMetaModuleManagerOptions<OpenGraph[Key]>>
) =>
  _provideNgxMetaModuleManager<OpenGraph, Key>(
    key,
    _withModuleManagerOptions(
      _withModuleManagerScope(OPEN_GRAPH_KEY),
      _withModuleManagerNameAttribute(withOpenGraphPropertyAttribute(key)),
      ...options,
    ),
  )
