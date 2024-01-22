import { NgModule } from '@angular/core'
import { provideNgxMetaJsonLd } from './provide-ngx-meta-json-ld'

@NgModule({
  providers: [...provideNgxMetaJsonLd()],
})
export class NgxMetaJsonLdModule {}
