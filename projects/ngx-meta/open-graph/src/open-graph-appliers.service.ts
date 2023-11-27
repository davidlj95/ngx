import { Injectable } from '@angular/core'
import { OpenGraph } from './open-graph'
import { OpenGraphType } from './open-graph-type'
import { OpenGraphImage } from './open-graph-image'
import { OpenGraphProperty } from './open-graph-property'
import {
  _MetaCommandService,
  _MetadataAppliers,
} from '@davidlj95/ngx-meta/common'

@Injectable()
export class OpenGraphAppliersService implements _MetadataAppliers<OpenGraph> {
  constructor(private readonly metaCommandService: _MetaCommandService) {}

  title(title: string | undefined | null): void {
    this.metaCommandService.newApply(OpenGraphProperty.TITLE, title)
  }

  type(type: OpenGraphType | undefined | null): void {
    this.metaCommandService.newApply(OpenGraphProperty.TYPE, type)
  }

  image(image: OpenGraphImage | undefined | null): void {
    if (image === null || image === undefined) {
      const imageProperties = OpenGraphProperty.images()
      for (const imageProperty of imageProperties) {
        this.metaCommandService.newApply(imageProperty, null)
      }
      return
    }

    const imageUrl = image.url?.toString()
    if (imageUrl !== undefined) {
      this.metaCommandService.newApply(OpenGraphProperty.IMAGE, imageUrl)
    }

    const imageAlt = image.alt
    if (imageAlt !== undefined) {
      this.metaCommandService.newApply(OpenGraphProperty.IMAGE_ALT, imageAlt)
    }

    this.metaCommandService.newApply(
      OpenGraphProperty.IMAGE_SECURE_URL,
      image.secureUrl?.toString(),
    )
    this.metaCommandService.newApply(OpenGraphProperty.IMAGE_TYPE, image.type)
    this.metaCommandService.newApply(
      OpenGraphProperty.IMAGE_WIDTH,
      image.width?.toString(),
    )
    this.metaCommandService.newApply(
      OpenGraphProperty.IMAGE_HEIGHT,
      image.height?.toString(),
    )
  }

  url(url: URL | string | undefined | null): void {
    this.metaCommandService.newApply(OpenGraphProperty.URL, url?.toString())
  }

  description(description: string | undefined | null): void {
    this.metaCommandService.newApply(OpenGraphProperty.DESCRIPTION, description)
  }

  locale(locale: string | undefined | null): void {
    this.metaCommandService.newApply(OpenGraphProperty.LOCALE, locale)
  }

  siteName(siteName: string | undefined | null): void {
    this.metaCommandService.newApply(OpenGraphProperty.SITE_NAME, siteName)
  }
}
