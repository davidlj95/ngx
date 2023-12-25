import { NgModule } from '@angular/core'
import { provideJsonLd } from './provide-json-ld'

@NgModule({
  providers: [...provideJsonLd()],
})
export class JsonLdModule {}
