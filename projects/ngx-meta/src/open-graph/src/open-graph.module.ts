import { NgModule } from '@angular/core'
import { NgxMetaCoreModule, provideMetadata } from '@davidlj95/ngx-meta/core'
import { TitleOpenGraphMetadata } from './title-open-graph-metadata'
import { TypeOpenGraphMetadata } from './type-open-graph-metadata'
import { ImageOpenGraphMetadata } from './image-open-graph-metadata'
import { UrlOpenGraphMetadata } from './url-open-graph-metadata'
import { DescriptionOpenGraphMetadata } from './description-open-graph-metadata'
import { LocaleOpenGraphMetadata } from './locale-open-graph-metadata'
import { SiteNameOpenGraphMetadata } from './site-name-open-graph-metadata'

@NgModule({
  imports: [NgxMetaCoreModule],
  providers: [
    provideMetadata(TitleOpenGraphMetadata),
    provideMetadata(TypeOpenGraphMetadata),
    provideMetadata(ImageOpenGraphMetadata),
    provideMetadata(UrlOpenGraphMetadata),
    provideMetadata(DescriptionOpenGraphMetadata),
    provideMetadata(LocaleOpenGraphMetadata),
    provideMetadata(SiteNameOpenGraphMetadata),
  ],
})
export class OpenGraphModule {}
