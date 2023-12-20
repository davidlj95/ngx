import { NgModule } from '@angular/core'
import { provideOpenGraphProfile } from './provide-open-graph-profile'

@NgModule({
  providers: [...provideOpenGraphProfile()],
})
export class OpenGraphProfileModule {}
