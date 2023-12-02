import { NgModule } from '@angular/core'
import { Metadata } from './metadata'
import { TitleMetadata } from './title-metadata'

@NgModule({
  providers: [
    {
      provide: Metadata,
      useClass: TitleMetadata,
      multi: true,
    },
  ],
})
export class StandardModule {}
