import { Injectable } from '@angular/core'
import { MetadataApplier } from '../common/metadata-applier'
import { OpenGraphProfile } from './open-graph-profile'
import { OpenGraphProfileAppliersService } from './open-graph-profile-appliers.service'

/**
 * Applies all Open Graph Profile metadata provided
 *
 * **IMPORTANT!**: does not inject defaults. To inject them, use the
 * [OpenGraphProfileService]
 */
@Injectable()
export class OpenGraphProfileApplierService
  implements MetadataApplier<OpenGraphProfile>
{
  constructor(private readonly appliers: OpenGraphProfileAppliersService) {}

  apply(metadata: OpenGraphProfile): void {
    this.appliers.firstName(metadata.firstName)
    this.appliers.lastName(metadata.lastName)
    this.appliers.username(metadata.username)
    this.appliers.gender(metadata.gender)
  }
}
