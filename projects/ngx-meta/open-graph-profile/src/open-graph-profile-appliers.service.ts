import { Injectable } from '@angular/core'
import { OpenGraphProfile } from './open-graph-profile'
import { OpenGraphProfileProperty } from './open-graph-profile-property'
import { _MetadataAppliers, _MetaService } from '@davidlj95/ngx-meta/common'

@Injectable()
export class OpenGraphProfileAppliersService
  implements _MetadataAppliers<OpenGraphProfile>
{
  constructor(private readonly metaService: _MetaService) {}

  firstName(firstName: OpenGraphProfile['firstName']): void {
    this.metaService.apply(OpenGraphProfileProperty.FIRST_NAME, firstName)
  }

  lastName(lastName: OpenGraphProfile['lastName']): void {
    this.metaService.apply(OpenGraphProfileProperty.LAST_NAME, lastName)
  }

  username(username: OpenGraphProfile['username']): void {
    this.metaService.apply(OpenGraphProfileProperty.USERNAME, username)
  }

  gender(gender: OpenGraphProfile['gender']): void {
    this.metaService.apply(OpenGraphProfileProperty.GENDER, gender)
  }
}
