import { BaseOpenGraphMetadata } from './base-open-graph-metadata'
import { OpenGraphMetadata } from './open-graph-metadata'
import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetaProperty } from './open-graph-meta-property'

const NO_IMAGE_VALUE: OpenGraphMetadata['image'] = {
  url: undefined,
  alt: undefined,
  secureUrl: null,
  type: null,
  width: null,
  height: null,
}

@Injectable()
export class ImageOpenGraphMetadata extends BaseOpenGraphMetadata<'image'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'image', globalName: 'image' })
  }

  set(value: OpenGraphMetadata['image']): void {
    const imageUrl = value?.url?.toString()
    const effectiveValue: OpenGraphMetadata['image'] =
      imageUrl !== undefined && imageUrl !== null ? value : NO_IMAGE_VALUE
    this.metaService.set(new OpenGraphMetaProperty('image'), imageUrl)
    this.metaService.set(
      new OpenGraphMetaProperty('image', 'alt'),
      effectiveValue?.alt,
    )
    this.metaService.set(
      new OpenGraphMetaProperty('image', 'secure_url'),
      effectiveValue?.secureUrl?.toString(),
    )
    this.metaService.set(
      new OpenGraphMetaProperty('image', 'type'),
      effectiveValue?.type,
    )
    this.metaService.set(
      new OpenGraphMetaProperty('image', 'width'),
      effectiveValue?.width?.toString(),
    )
    this.metaService.set(
      new OpenGraphMetaProperty('image', 'height'),
      effectiveValue?.height?.toString(),
    )
  }
}
