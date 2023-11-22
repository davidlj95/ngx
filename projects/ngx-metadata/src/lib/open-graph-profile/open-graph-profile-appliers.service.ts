import { Injectable } from '@angular/core'
import { MetadataAppliers } from '../common/metadata-appliers'
import { OpenGraphProfile } from './open-graph-profile'
import { MetaCommand } from '../common/meta-command/meta-command'
import { OpenGraphProfileProperty } from './open-graph-profile-property'
import { MetaCommandService } from '../common/meta-command/meta-command.service'

@Injectable()
export class OpenGraphProfileAppliersService
  implements MetadataAppliers<OpenGraphProfile>
{
  constructor(private readonly metaCommandService: MetaCommandService) {}

  firstName(firstName: OpenGraphProfile['firstName']): void {
    this.metaCommandService.apply(
      new MetaCommand(OpenGraphProfileProperty.FIRST_NAME, firstName),
    )
  }

  lastName(lastName: OpenGraphProfile['lastName']): void {
    this.metaCommandService.apply(
      new MetaCommand(OpenGraphProfileProperty.LAST_NAME, lastName),
    )
  }

  username(username: OpenGraphProfile['username']): void {
    this.metaCommandService.apply(
      new MetaCommand(OpenGraphProfileProperty.USERNAME, username),
    )
  }

  gender(gender: OpenGraphProfile['gender']): void {
    this.metaCommandService.apply(
      new MetaCommand(OpenGraphProfileProperty.GENDER, gender),
    )
  }
}
