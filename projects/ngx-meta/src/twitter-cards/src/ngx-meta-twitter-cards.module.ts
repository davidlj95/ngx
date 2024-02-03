import { NgModule } from '@angular/core'
import { provideNgxMetaTwitterCards } from './provide-ngx-meta-twitter-cards'

@NgModule({
  providers: [...provideNgxMetaTwitterCards()],
})
export class NgxMetaTwitterCardsModule {}
