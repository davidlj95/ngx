import { makeOpenGraphMetaProperty } from '@davidlj95/ngx-meta/open-graph'

export const makeOpenGraphProfileMetaProperty = (...names: string[]) =>
  makeOpenGraphMetaProperty(...['profile', ...names])
