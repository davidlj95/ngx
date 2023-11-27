import { Injectable } from '@angular/core'
import { OpenGraphProfile } from './open-graph-profile'
import { OpenGraphProfileProperty } from './open-graph-profile-property'
import {
  _MetaCommandService,
  _MetadataAppliers,
} from '@davidlj95/ngx-meta/common'

@Injectable()
export class OpenGraphProfileAppliersService
  implements _MetadataAppliers<OpenGraphProfile>
{
  constructor(private readonly metaCommandService: _MetaCommandService) {}

  firstName(firstName: OpenGraphProfile['firstName']): void {
    this.metaCommandService.newApply(
      OpenGraphProfileProperty.FIRST_NAME,
      firstName,
    )
  }

  lastName(lastName: OpenGraphProfile['lastName']): void {
    this.metaCommandService.newApply(
      OpenGraphProfileProperty.LAST_NAME,
      lastName,
    )
  }

  username(username: OpenGraphProfile['username']): void {
    this.metaCommandService.newApply(
      OpenGraphProfileProperty.USERNAME,
      username,
    )
  }

  gender(gender: OpenGraphProfile['gender']): void {
    this.metaCommandService.newApply(OpenGraphProfileProperty.GENDER, gender)
  }
}
