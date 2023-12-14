import { NgModule } from '@angular/core'
import { Metadata, NgxMetaCoreModule } from '@davidlj95/ngx-meta/core'
import { TitleOpenGraphMetadata } from './title-open-graph-metadata'
import { TypeOpenGraphMetadata } from './type-open-graph-metadata'

@NgModule({
  imports: [NgxMetaCoreModule],
  providers: [
    {
      provide: Metadata,
      useClass: TitleOpenGraphMetadata,
      multi: true,
    },
    {
      provide: Metadata,
      useClass: TypeOpenGraphMetadata,
      multi: true,
    },
  ],
})
export class OpenGraphModule {}
