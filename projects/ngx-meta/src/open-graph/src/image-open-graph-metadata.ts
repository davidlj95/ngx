import { BaseOpenGraphMetadata } from './base-open-graph-metadata'
import { OpenGraphMetadata } from './open-graph-metadata'
import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetaProperty } from './open-graph-meta-property'

const KEY = 'image'
const NO_IMAGE_VALUE: OpenGraphMetadata[typeof KEY] = {
  url: undefined,
  alt: undefined,
  secureUrl: null,
  type: null,
  width: null,
  height: null,
}

@Injectable()
export class ImageOpenGraphMetadata extends BaseOpenGraphMetadata<typeof KEY> {
  constructor(private readonly metaService: MetaService) {
    super(KEY, KEY)
  }

  set(value: OpenGraphMetadata[typeof KEY]): void {
    const imageUrl = value?.url?.toString()
    const effectiveValue: OpenGraphMetadata[typeof KEY] =
      imageUrl !== undefined && imageUrl !== null ? value : NO_IMAGE_VALUE
    this.metaService.set(new OpenGraphMetaProperty(KEY), imageUrl)
    this.metaService.set(
      new OpenGraphMetaProperty(KEY, 'alt'),
      effectiveValue?.alt,
    )
    this.metaService.set(
      new OpenGraphMetaProperty(KEY, 'secure_url'),
      effectiveValue?.secureUrl?.toString(),
    )
    this.metaService.set(
      new OpenGraphMetaProperty(KEY, 'type'),
      effectiveValue?.type,
    )
    this.metaService.set(
      new OpenGraphMetaProperty(KEY, 'width'),
      effectiveValue?.width?.toString(),
    )
    this.metaService.set(
      new OpenGraphMetaProperty(KEY, 'height'),
      effectiveValue?.height?.toString(),
    )
  }
}
