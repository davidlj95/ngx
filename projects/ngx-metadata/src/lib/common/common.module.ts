import { NgModule } from '@angular/core'
import { DefaultsService } from './defaults.service'
import { MetaCommandService } from './meta-command/meta-command.service'

@NgModule({
  providers: [MetaCommandService, DefaultsService],
})
export class CommonModule {}
