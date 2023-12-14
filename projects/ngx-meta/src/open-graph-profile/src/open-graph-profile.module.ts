import { NgModule } from '@angular/core'
import { provideMetadata } from '@davidlj95/ngx-meta/core'
import { FirstNameOpenGraphProfileMetadata } from './first-name-open-graph-profile-metadata'
import { LastNameOpenGraphProfileMetadata } from './last-name-open-graph-profile-metadata'

@NgModule({
  providers: [
    provideMetadata(FirstNameOpenGraphProfileMetadata),
    provideMetadata(LastNameOpenGraphProfileMetadata),
  ],
})
export class OpenGraphProfileModule {}
