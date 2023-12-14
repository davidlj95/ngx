import { NgModule } from '@angular/core'
import { JsonLdMetadata } from './json-ld-metadata'
import { provideMetadata } from '@davidlj95/ngx-meta/core'

@NgModule({
  providers: [provideMetadata(JsonLdMetadata)],
})
export class JsonLdModule {}
