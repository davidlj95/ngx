import { Injectable } from '@angular/core'
import { _MetadataApplier } from 'ngx-metadata/common'
import { OpenGraph } from './open-graph'
import { OpenGraphAppliersService } from './open-graph-appliers.service'

/**
 * Applies all Open Graph metadata provided
 *
 * **IMPORTANT!**: does not inject defaults. To inject them, use the
 * [OpenGraphService]
 */
@Injectable()
export class OpenGraphApplierService implements _MetadataApplier<OpenGraph> {
  constructor(private readonly appliers: OpenGraphAppliersService) {}

  apply(metadata: OpenGraph): void {
    this.appliers.title(metadata.title)
    this.appliers.type(metadata.type)
    this.appliers.image(metadata.image)
    this.appliers.url(metadata.url)
    this.appliers.description(metadata.description)
    this.appliers.locale(metadata.locale)
    this.appliers.siteName(metadata.siteName)
  }
}
