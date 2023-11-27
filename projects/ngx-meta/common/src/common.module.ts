import { NgModule } from '@angular/core'
import { DefaultsService } from './defaults.service'
import { MetaService } from './meta/meta.service'

@NgModule({
  providers: [MetaService, DefaultsService],
})
export class CommonModule {}
