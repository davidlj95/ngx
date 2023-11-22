import { Injectable } from '@angular/core'
import {
  _MetaCommand,
  _MetaCommandService,
  _MetadataAppliers,
} from 'ngx-metadata/common'
import { OpenGraphProfile } from './open-graph-profile'
import { OpenGraphProfileProperty } from './open-graph-profile-property'

@Injectable()
export class OpenGraphProfileAppliersService
  implements _MetadataAppliers<OpenGraphProfile>
{
  constructor(private readonly metaCommandService: _MetaCommandService) {}

  firstName(firstName: OpenGraphProfile['firstName']): void {
    this.metaCommandService.apply(
      new _MetaCommand(OpenGraphProfileProperty.FIRST_NAME, firstName),
    )
  }

  lastName(lastName: OpenGraphProfile['lastName']): void {
    this.metaCommandService.apply(
      new _MetaCommand(OpenGraphProfileProperty.LAST_NAME, lastName),
    )
  }

  username(username: OpenGraphProfile['username']): void {
    this.metaCommandService.apply(
      new _MetaCommand(OpenGraphProfileProperty.USERNAME, username),
    )
  }

  gender(gender: OpenGraphProfile['gender']): void {
    this.metaCommandService.apply(
      new _MetaCommand(OpenGraphProfileProperty.GENDER, gender),
    )
  }
}
