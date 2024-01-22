import { NgModule } from '@angular/core'
import { provideNgxMetaStandard } from './provide-ngx-meta-standard'

@NgModule({
  providers: [...provideNgxMetaStandard()],
})
export class NgxMetaStandardModule {}
