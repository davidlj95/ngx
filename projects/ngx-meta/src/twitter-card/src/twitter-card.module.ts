import { NgModule } from '@angular/core'
import { provideTwitterCard } from './provide-twitter-card'

@NgModule({
  providers: [...provideTwitterCard()],
})
export class TwitterCardModule {}
