import {
  Inject,
  Injectable,
  isDevMode,
  OnDestroy,
  Optional,
} from '@angular/core'
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
      if (isDevMode()) {
        console.warn(
          'NgxMeta router listener was listened twice. ' +
            'Ensure the NgxMetaRoutingModule is not imported twice',
        )
      }
      return
    }

    this.subscription = this.router.events
      .pipe(filter(({ type }) => type === EventType.NavigationEnd))
      .subscribe({
        next: () => {
          if (!this.metadataRouteStrategies) {
            if (isDevMode()) {
              console.warn(
                'NgxMeta router tried to set metadata for this route, ' +
                  'but no metadata route strategies were found. ' +
                  'Provide one MetadataRouteStrategy to resolves metadata ' +
                  'from a route to fix this.',
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

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
