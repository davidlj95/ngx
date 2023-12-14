import { OpenGraphMetaProperty } from '@davidlj95/ngx-meta/open-graph'

export class OpenGraphProfileMetaProperty extends OpenGraphMetaProperty {
  constructor(...names: string[]) {
    super(...['profile', ...names])
  }
}
