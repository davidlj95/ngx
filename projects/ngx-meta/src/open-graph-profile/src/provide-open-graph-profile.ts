import { Provider } from '@angular/core'
import { provideMetadata } from '@davidlj95/ngx-meta/core'
import { FirstNameOpenGraphProfileMetadata } from './first-name-open-graph-profile-metadata'
import { LastNameOpenGraphProfileMetadata } from './last-name-open-graph-profile-metadata'
import { UsernameOpenGraphProfileMetadata } from './username-open-graph-profile-metadata'
import { GenderOpenGraphProfileMetadata } from './gender-open-graph-profile-metadata'

export function provideOpenGraphProfile(): Provider[] {
  return [
    provideMetadata(FirstNameOpenGraphProfileMetadata),
    provideMetadata(LastNameOpenGraphProfileMetadata),
    provideMetadata(UsernameOpenGraphProfileMetadata),
    provideMetadata(GenderOpenGraphProfileMetadata),
  ]
}
