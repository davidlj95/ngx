import { NgModule } from '@angular/core'
import { provideNgxMetaOpenGraph } from './provide-ngx-meta-open-graph'

@NgModule({
  providers: [...provideNgxMetaOpenGraph()],
})
export class NgxMetaOpenGraphModule {}
