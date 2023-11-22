import { Injectable } from '@angular/core'
import { MetadataApplier } from '../common/metadata-applier'
import { GeneralMetadata } from './general-metadata'
import { GeneralMetadataAppliersService } from './general-metadata-appliers.service'

/**
 * Applies all general metadata provided
 *
 * **IMPORTANT!**: does not inject defaults. To inject them, use the
 * [GeneralMetadataService]
 */
@Injectable()
export class GeneralMetadataApplierService
  implements MetadataApplier<GeneralMetadata>
{
  constructor(private readonly appliers: GeneralMetadataAppliersService) {}

  apply(metadata: GeneralMetadata): void {
    this.appliers.title(metadata.title)
    this.appliers.description(metadata.description)
    this.appliers.author(metadata.author)
    this.appliers.keywords(metadata.keywords)
    this.appliers.generator(metadata.generator)
    this.appliers.applicationName(metadata.applicationName)
    this.appliers.canonicalUrl(metadata.canonicalUrl)
    this.appliers.locale(metadata.locale)
    this.appliers.image(metadata.image)
  }
}
