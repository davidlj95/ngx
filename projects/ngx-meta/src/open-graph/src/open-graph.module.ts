import { NgModule } from '@angular/core'
import { provideOpenGraph } from './provide-open-graph'

@NgModule({
  providers: [...provideOpenGraph()],
})
export class OpenGraphModule {}
