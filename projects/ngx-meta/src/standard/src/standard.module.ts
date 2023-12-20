import { NgModule } from '@angular/core'
import { provideStandard } from './provide-standard'

@NgModule({
  providers: [...provideStandard()],
})
export class StandardModule {}
