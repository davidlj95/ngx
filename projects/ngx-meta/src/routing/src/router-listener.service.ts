import { Inject, Injectable, OnDestroy, Optional } from '@angular/core'
import { ActivatedRoute, EventType, Router } from '@angular/router'
import { filter, Subscription } from 'rxjs'
import { MetadataRouteStrategy } from './metadata-route-strategy'

@Injectable({ providedIn: 'root' })
export class RouterListenerService implements OnDestroy {
  // Replace by `takeUntilDestroyed` when stable
  // https://angular.io/api/core/rxjs-interop/takeUntilDestroyed
  private subscription?: Subscription

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    @Optional()
    @Inject(MetadataRouteStrategy)
    private readonly metadataRouteStrategies: ReadonlyArray<MetadataRouteStrategy>,
  ) {}

  public listen() {
    if (this.isListening) {
      if (ngDevMode) {
        console.warn(
          'NgxMetaRoutingModule was set to listen for route changes ' +
            'twice. Ensure the NgxMetaRoutingModule is not imported twice',
        )
      }
      return
    }

    this.subscription = this.router.events
      .pipe(filter(({ type }) => type === EventType.NavigationEnd))
      .subscribe({
        next: () => {
          if (!this.metadataRouteStrategies) {
            if (ngDevMode) {
              console.warn(
                '`NgxMetaRoutingModule` tried to set metadata for this ' +
                  'route but no metadata route strategies were found. ' +
                  'Provide at least one `MetadataRouteStrategy` to be able ' +
                  'to resolve metadata from a route and set it in order to ' +
                  'fix this.',
              )
            }
            return
          }
          const strategies = Array.isArray(this.metadataRouteStrategies)
            ? this.metadataRouteStrategies
            : [this.metadataRouteStrategies]
          for (const strategy of strategies) {
            const data = strategy.resolve(this.activatedRoute.snapshot)
            strategy.set(data)
          }
        },
      })
  }

  public get isListening(): boolean {
    return !!this.subscription
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
