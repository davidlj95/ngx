import { NgModule } from '@angular/core'
import { provideNgxMetaTwitterCard } from './provide-ngx-meta-twitter-card'

@NgModule({
  providers: [...provideNgxMetaTwitterCard()],
})
export class NgxMetaTwitterCardModule {}
