import { NgModule } from '@angular/core'
import { NgxMetaCoreModule, provideMetadata } from '@davidlj95/ngx-meta/core'
import { FirstNameOpenGraphProfileMetadata } from './first-name-open-graph-profile-metadata'
import { LastNameOpenGraphProfileMetadata } from './last-name-open-graph-profile-metadata'
import { UsernameOpenGraphProfileMetadata } from './username-open-graph-profile-metadata'
import { GenderOpenGraphProfileMetadata } from './gender-open-graph-profile-metadata'

@NgModule({
  imports: [NgxMetaCoreModule],
  providers: [
    provideMetadata(FirstNameOpenGraphProfileMetadata),
    provideMetadata(LastNameOpenGraphProfileMetadata),
    provideMetadata(UsernameOpenGraphProfileMetadata),
    provideMetadata(GenderOpenGraphProfileMetadata),
  ],
})
export class OpenGraphProfileModule {}
