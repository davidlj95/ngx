import { Inject, Injectable, OnDestroy, Optional } from '@angular/core'
import { ActivatedRoute, EventType, Router } from '@angular/router'
import { filter, Subscription } from 'rxjs'
import { MetadataRouteStrategy } from './metadata-route-strategy'

@Injectable()
export class RouterListenerService implements OnDestroy {
  // Replace by `takeUntilDestroyed` when stable
  // https://angular.io/api/core/rxjs-interop/takeUntilDestroyed
  private subscription?: Subscription

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    @Optional()
    @Inject(MetadataRouteStrategy)
    private readonly metadataRouteStrategies: ReadonlyArray<
      MetadataRouteStrategy<unknown>
    >,
  ) {}

  public listen() {
    if (this.subscription) {
      throw new Error('Already listening to route changes')
    }

    this.subscription = this.router.events
      .pipe(filter(({ type }) => type === EventType.NavigationEnd))
      .subscribe({
        next: () => {
          if (!this.metadataRouteStrategies) {
            console.warn('No metadata set: no strategies found')
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

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
