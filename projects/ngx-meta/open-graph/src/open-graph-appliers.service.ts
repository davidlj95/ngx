import { Injectable } from '@angular/core'
import { OpenGraph } from './open-graph'
import { OpenGraphType } from './open-graph-type'
import { OpenGraphImage } from './open-graph-image'
import { OpenGraphProperty } from './open-graph-property'
import { _MetadataAppliers, _MetaService } from '@davidlj95/ngx-meta/common'

@Injectable()
export class OpenGraphAppliersService implements _MetadataAppliers<OpenGraph> {
  constructor(private readonly metaService: _MetaService) {}

  title(title: string | undefined | null): void {
    this.metaService.apply(OpenGraphProperty.TITLE, title)
  }

  type(type: OpenGraphType | undefined | null): void {
    this.metaService.apply(OpenGraphProperty.TYPE, type)
  }

  image(image: OpenGraphImage | undefined | null): void {
    if (image === null || image === undefined) {
      const imageProperties = OpenGraphProperty.images()
      for (const imageProperty of imageProperties) {
        this.metaService.apply(imageProperty, null)
      }
      return
    }

    const imageUrl = image.url?.toString()
    if (imageUrl !== undefined) {
      this.metaService.apply(OpenGraphProperty.IMAGE, imageUrl)
    }

    const imageAlt = image.alt
    if (imageAlt !== undefined) {
      this.metaService.apply(OpenGraphProperty.IMAGE_ALT, imageAlt)
    }

    this.metaService.apply(
      OpenGraphProperty.IMAGE_SECURE_URL,
      image.secureUrl?.toString(),
    )
    this.metaService.apply(OpenGraphProperty.IMAGE_TYPE, image.type)
    this.metaService.apply(
      OpenGraphProperty.IMAGE_WIDTH,
      image.width?.toString(),
    )
    this.metaService.apply(
      OpenGraphProperty.IMAGE_HEIGHT,
      image.height?.toString(),
    )
  }

  url(url: URL | string | undefined | null): void {
    this.metaService.apply(OpenGraphProperty.URL, url?.toString())
  }

  description(description: string | undefined | null): void {
    this.metaService.apply(OpenGraphProperty.DESCRIPTION, description)
  }

  locale(locale: string | undefined | null): void {
    this.metaService.apply(OpenGraphProperty.LOCALE, locale)
  }

  siteName(siteName: string | undefined | null): void {
    this.metaService.apply(OpenGraphProperty.SITE_NAME, siteName)
  }
}
