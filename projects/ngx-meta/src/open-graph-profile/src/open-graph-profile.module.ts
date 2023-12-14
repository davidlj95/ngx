import { NgModule } from '@angular/core'
import { provideMetadata } from '@davidlj95/ngx-meta/core'
import { FirstNameOpenGraphProfileMetadata } from './first-name-open-graph-profile-metadata'

@NgModule({
  providers: [provideMetadata(FirstNameOpenGraphProfileMetadata)],
})
export class OpenGraphProfileModule {}
