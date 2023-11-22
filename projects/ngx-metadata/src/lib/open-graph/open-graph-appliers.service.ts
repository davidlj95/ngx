import { Injectable } from '@angular/core'
import { OpenGraph } from './open-graph'
import { OpenGraphType } from './open-graph-type'
import { OpenGraphImage } from './open-graph-image'
import {
  _MetaCommand,
  _MetaCommandService,
  _MetadataAppliers,
} from 'ngx-metadata/common'
import { OpenGraphProperty } from './open-graph-property'

@Injectable()
export class OpenGraphAppliersService implements _MetadataAppliers<OpenGraph> {
  constructor(private readonly metaCommandService: _MetaCommandService) {}

  title(title: string | undefined | null): void {
    this.metaCommandService.apply(
      new _MetaCommand(OpenGraphProperty.TITLE, title),
    )
  }

  type(type: OpenGraphType | undefined | null): void {
    this.metaCommandService.apply(
      new _MetaCommand(OpenGraphProperty.TYPE, type),
    )
  }

  image(image: OpenGraphImage | undefined | null): void {
    if (image === null || image === undefined) {
      const imageProperties = OpenGraphProperty.images().map(
        (property) => new _MetaCommand(property, null),
      )
      for (const imageProperty of imageProperties) {
        this.metaCommandService.apply(imageProperty)
      }
      return
    }

    const imageUrl = image.url?.toString()
    if (imageUrl !== undefined) {
      this.metaCommandService.apply(
        new _MetaCommand(OpenGraphProperty.IMAGE, imageUrl),
      )
    }

    const imageAlt = image.alt
    if (imageAlt !== undefined) {
      this.metaCommandService.apply(
        new _MetaCommand(OpenGraphProperty.IMAGE_ALT, imageAlt),
      )
    }

    this.metaCommandService.apply(
      new _MetaCommand(
        OpenGraphProperty.IMAGE_SECURE_URL,
        image.secureUrl?.toString(),
      ),
    )
    this.metaCommandService.apply(
      new _MetaCommand(OpenGraphProperty.IMAGE_TYPE, image.type),
    )
    this.metaCommandService.apply(
      new _MetaCommand(OpenGraphProperty.IMAGE_WIDTH, image.width?.toString()),
    )
    this.metaCommandService.apply(
      new _MetaCommand(
        OpenGraphProperty.IMAGE_HEIGHT,
        image.height?.toString(),
      ),
    )
  }

  url(url: URL | string | undefined | null): void {
    this.metaCommandService.apply(
      new _MetaCommand(OpenGraphProperty.URL, url?.toString()),
    )
  }

  description(description: string | undefined | null): void {
    this.metaCommandService.apply(
      new _MetaCommand(OpenGraphProperty.DESCRIPTION, description),
    )
  }

  locale(locale: string | undefined | null): void {
    this.metaCommandService.apply(
      new _MetaCommand(OpenGraphProperty.LOCALE, locale),
    )
  }

  siteName(siteName: string | undefined | null): void {
    this.metaCommandService.apply(
      new _MetaCommand(OpenGraphProperty.SITE_NAME, siteName),
    )
  }
}
