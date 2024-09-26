import { Inject, Injectable, OnDestroy, Optional } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { filter, Subscription } from 'rxjs'
import {
  NGX_META_ROUTE_STRATEGY,
  NgxMetaRouteStrategy,
} from './ngx-meta-route-strategy'
import {
  _formatDevMessage,
  _RouteValuesService,
  NgxMetaService,
} from '@davidlj95/ngx-meta/core'
import { _MODULE_NAME } from './module-name'

// WTF is this? Why not just import `EventType`? Well, compatibility reasons 🙃
// See https://github.com/davidlj95/ngx/pull/246 for the details
export const NAVIGATION_END_EVENT_TYPE = new NavigationEnd(0, '', '').type

@Injectable({ providedIn: 'root' })
export class RouterListenerService implements OnDestroy {
  // Replace by `takeUntilDestroyed` when stable & oldest Angular supported version is v16 where it was introduced
  // https://angular.dev/api/core/rxjs-interop/takeUntilDestroyed
  // https://github.com/angular/angular/commit/e8831984601da631afc29f9fd72d36f57696f936
  private sub?: Subscription

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    @Optional()
    @Inject(NGX_META_ROUTE_STRATEGY)
    private readonly strategy: NgxMetaRouteStrategy | null,
    private readonly ngxMetaService: NgxMetaService,
    private readonly routeValuesService: _RouteValuesService,
  ) {}

  public listen() {
    if (this.sub) {
      if (ngDevMode) {
        console.warn(
          _formatDevMessage(
            [
              'prevented listening for route changes twice',
              'Ensure routing provider or module is only imported once',
            ].join('\n'),
            { module: _MODULE_NAME },
          ),
        )
      }
      return
    }

    this.sub = this.router.events
      .pipe(filter(({ type }) => type === NAVIGATION_END_EVENT_TYPE))
      .subscribe({
        next: () => {
          if (!this.strategy) {
            if (ngDevMode) {
              console.warn(
                _formatDevMessage(
                  [
                    'tried to set metadata for this route, but no metadata route strategy was found',
                    'Provide at least one `MetadataRouteStrategy` to resolve metadata for a route',
                  ].join('\n'),
                  { module: _MODULE_NAME, value: this.router.url },
                ),
              )
            }
            return
          }
          const values = this.strategy(this.activatedRoute.snapshot)
          this.ngxMetaService.set(values)
          this.routeValuesService.set(values)
        },
      })
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
}
