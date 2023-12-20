import { NgModule } from '@angular/core'
import { ROUTING_PROVIDERS } from './provide-routing'

@NgModule({
  providers: [...ROUTING_PROVIDERS],
})
export class RoutingModule {}
