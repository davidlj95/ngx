import {
  _provideNgxMetaModuleManager,
  _ProvideNgxMetaModuleManagerOptions,
  _withModuleManagerNameAttribute,
  withOptions,
} from '@davidlj95/ngx-meta/core'
import { OpenGraph, OpenGraphMetadata } from '../types'
import { withOpenGraphPropertyAttribute } from './with-open-graph-property-attribute'

export const OPEN_GRAPH_KEY: keyof OpenGraphMetadata = 'openGraph'

export const provideOpenGraphManager = <Key extends keyof OpenGraph>(
  key: Key,
  ...options: readonly _ProvideNgxMetaModuleManagerOptions<OpenGraph[Key]>[]
) =>
  _provideNgxMetaModuleManager<OpenGraph, Key>(
    key,
    [OPEN_GRAPH_KEY],
    withOptions(
      _withModuleManagerNameAttribute(withOpenGraphPropertyAttribute(key)),
      ...options,
    ),
  )
