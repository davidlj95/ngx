import { inject, InjectionToken, OnDestroy } from '@angular/core'
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router'
import { filter, Subscription } from 'rxjs'
import { ROUTE_METADATA_STRATEGY } from './route-metadata-strategy'
import {
  _formatDevMessage,
  _RouteValuesService,
  NgxMetaService,
} from '@davidlj95/ngx-meta/core'
import { _MODULE_NAME } from './module-name'

// WTF is this? Why not just import `EventType`? Well, compatibility reasons 🙃
// See https://github.com/davidlj95/ngx/pull/246 for the details
export const NAVIGATION_END_EVENT_TYPE = new NavigationEnd(0, '', '').type

export const ROUTER_LISTENER = new InjectionToken<RouterListener>(
  ngDevMode ? 'NgxMeta Router listener' : 'NgxMetaRL',
  {
    factory: () => {
      const router = inject(Router)
      const activatedRoute = inject(ActivatedRoute)
      const strategy = inject(ROUTE_METADATA_STRATEGY)
      const ngxMetaService = inject(NgxMetaService)
      const routeValuesService = inject(_RouteValuesService)
      let subscription: Subscription | undefined
      return {
        listen() {
          ngDevMode &&
            subscription &&
            // https://github.com/istanbuljs/istanbuljs/issues/719
            // prettier-ignore
            console.warn(
              _formatDevMessage(
                [
                  'prevented listening for route changes twice',
                  'Ensure routing provider or module is only imported once',
                ].join('\n'),
                { module: _MODULE_NAME },
              ))
          /* istanbul ignore next https://github.com/istanbuljs/istanbuljs/issues/719 */
          if (subscription) {
            return
          }
          subscription = router.events
            .pipe(filter(({ type }) => type === NAVIGATION_END_EVENT_TYPE))
            .subscribe({
              next: () => {
                const values = strategy(activatedRoute.snapshot)
                ngxMetaService.set(values)
                routeValuesService.set(values)
              },
            })
        },
        // Can't use DestroyRef is introduced in Angular v16
        // https://github.com/angular/angular/pull/49158
        // It uses EnvironmentInjector's internal `onDestroy` under the hood
        // Tried that too, but it's @internal + raises some errors. So back to the `ngOnDestroy`
        ngOnDestroy: () => subscription?.unsubscribe(),
      }
    },
  },
)
export type RouterListener = { listen: () => void } & OnDestroy
