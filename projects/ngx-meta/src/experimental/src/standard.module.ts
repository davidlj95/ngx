import { NgModule } from '@angular/core'
import { Metadata } from './metadata'
import { TitleMetadata } from './title-metadata'
import { DescriptionMetadata } from './description-metadata'

@NgModule({
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
