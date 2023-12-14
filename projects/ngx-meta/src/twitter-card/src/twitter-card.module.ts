import { NgModule } from '@angular/core'
import { provideMetadata } from '@davidlj95/ngx-meta/core'
import { CardTwitterCardMetadata } from './card-twitter-card-metadata'
import { SiteTwitterCardMetadata } from './site-twitter-card-metadata'

@NgModule({
  providers: [
    provideMetadata(CardTwitterCardMetadata),
    provideMetadata(SiteTwitterCardMetadata),
  ],
})
export class TwitterCardModule {}
