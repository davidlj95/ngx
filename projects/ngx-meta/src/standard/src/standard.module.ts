import { NgModule } from '@angular/core'
import { Metadata, NgxMetaCoreModule } from '@davidlj95/ngx-meta/core'
import { TitleMetadata } from './title-metadata'
import { DescriptionMetadata } from './description-metadata'

@NgModule({
  imports: [NgxMetaCoreModule],
  providers: [
    {
      provide: Metadata,
      useClass: TitleMetadata,
      multi: true,
    },
    {
      provide: Metadata,
      useClass: DescriptionMetadata,
      multi: true,
    },
  ],
})
export class StandardModule {}
