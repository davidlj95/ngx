import { NgModule } from '@angular/core'
import { provideMetadata } from '@davidlj95/ngx-meta/core'
import { CardTwitterCardMetadata } from './card-twitter-card-metadata'
import { SiteTwitterCardMetadata } from './site-twitter-card-metadata'
import { CreatorTwitterCardMetadata } from './creator-twitter-card-metadata'
import { DescriptionTwitterCardMetadata } from './description-twitter-card-metadata'
import { TitleTwitterCardMetadata } from './title-twitter-card-metadata'
import { ImageTwitterCardMetadata } from './image-twitter-card-metadata'

@NgModule({
  providers: [
    provideMetadata(CardTwitterCardMetadata),
    provideMetadata(SiteTwitterCardMetadata),
    provideMetadata(CreatorTwitterCardMetadata),
    provideMetadata(DescriptionTwitterCardMetadata),
    provideMetadata(TitleTwitterCardMetadata),
    provideMetadata(ImageTwitterCardMetadata),
  ],
})
export class TwitterCardModule {}
