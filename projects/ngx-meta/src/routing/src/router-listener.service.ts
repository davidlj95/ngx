import { Inject, Injectable, OnDestroy, Optional } from '@angular/core'
import { ActivatedRoute, EventType, Router } from '@angular/router'
import { filter, Subscription } from 'rxjs'
import {
  NGX_META_ROUTE_STRATEGY,
  NgxMetaRouteStrategy,
} from './ngx-meta-route-strategy'
import { _RouteMetadataValues, MetadataService } from '@davidlj95/ngx-meta/core'

@Injectable({ providedIn: 'root' })
export class RouterListenerService implements OnDestroy {
  // Replace by `takeUntilDestroyed` when stable
  // https://angular.io/api/core/rxjs-interop/takeUntilDestroyed
  private sub?: Subscription

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    @Optional()
    @Inject(NGX_META_ROUTE_STRATEGY)
    private readonly strategy: NgxMetaRouteStrategy | null,
    private readonly metadataService: MetadataService,
    private readonly routeMetadataValues: _RouteMetadataValues,
  ) {}

  public listen() {
    if (this.sub) {
      if (ngDevMode) {
        console.warn(
          'NgxMetaRoutingModule was set to listen for route changes ' +
            'twice. Ensure the NgxMetaRoutingModule is not imported twice',
        )
      }
      return
    }

    this.sub = this.router.events
      .pipe(filter(({ type }) => type === EventType.NavigationEnd))
      .subscribe({
        next: () => {
          if (!this.strategy) {
            if (ngDevMode) {
              console.warn(
                '`NgxMetaRoutingModule` tried to set metadata for this ' +
                  'route but no metadata route strategy was found. ' +
                  'Provide at least one `MetadataRouteStrategy` to be able ' +
                  'to resolve metadata from a route and set it in order to ' +
                  'fix this.',
              )
            }
            return
          }
          const values = this.strategy(this.activatedRoute.snapshot)
          this.metadataService.set(values)
          this.routeMetadataValues.set(values)
        },
      })
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
}
