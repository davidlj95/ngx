import { NgModule } from '@angular/core'
import { provideNgxMetaOpenGraphProfile } from './provide-ngx-meta-open-graph-profile'

@NgModule({
  providers: [...provideNgxMetaOpenGraphProfile()],
})
export class NgxMetaOpenGraphProfileModule {}
