import { OpenGraphMetadata } from './open-graph-metadata'
import { OpenGraphMetadataValues } from './open-graph-metadata-values'
import { Injectable } from '@angular/core'
import { MetaService } from '@davidlj95/ngx-meta/core'
import { OpenGraphMetaProperty } from './open-graph-meta-property'

const NO_IMAGE_VALUE: OpenGraphMetadataValues['image'] = {
  url: undefined,
  alt: undefined,
  secureUrl: null,
  type: null,
  width: null,
  height: null,
}

@Injectable()
export class ImageOpenGraphMetadata extends OpenGraphMetadata<'image'> {
  constructor(private readonly metaService: MetaService) {
    super({ name: 'image', globalName: 'image' })
  }

  set(value: OpenGraphMetadataValues['image']): void {
    const imageUrl = value?.url?.toString()
    const effectiveValue: OpenGraphMetadataValues['image'] =
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
