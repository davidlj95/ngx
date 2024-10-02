import { ModuleWithProviders, NgModule } from '@angular/core'
import { provideNgxMetaRouting } from './provide-ngx-meta-routing'

/**
 * Allows to manage metadata of a page by specifying it in its Angular
 * {@link https://angular.dev/api/router/Route#data | Route#data}
 *
 * Check out {@link provideNgxMetaRouting} for the standalone, recommended API.
 *
 * @public
 */
@NgModule()
export class NgxMetaRoutingModule {
  static forRoot(): ModuleWithProviders<NgxMetaRoutingModule> {
    return {
      ngModule: NgxMetaRoutingModule,
      providers: [provideNgxMetaRouting()],
    }
  }
}
