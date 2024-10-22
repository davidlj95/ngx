import { ModuleWithProviders, NgModule } from '@angular/core'
import { provideNgxMetaRouting } from './provide-ngx-meta-routing'

/**
 * Enables managing metadata of a page by specifying it in its Angular
 * {@link https://angular.dev/api/router/Route#data | Route#data}
 *
 * Use {@link NgxMetaRoutingModule.forRoot} method. Importing the module class alone does nothing.
 *
 * Check out {@link provideNgxMetaRouting} for the standalone, recommended API.
 *
 * @public
 */
@NgModule()
export class NgxMetaRoutingModule {
  /**
   * {@inheritDoc NgxMetaRoutingModule}
   */
  static forRoot(): ModuleWithProviders<NgxMetaRoutingModule> {
    /* istanbul ignore next - simple enough */
    return {
      ngModule: NgxMetaRoutingModule,
      providers: [provideNgxMetaRouting()],
    }
  }
}
