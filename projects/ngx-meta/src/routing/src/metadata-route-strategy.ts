import { InjectionToken } from '@angular/core'
import { ActivatedRouteSnapshot } from '@angular/router'
import { MetadataValues } from '@davidlj95/ngx-meta/core'

export type MetadataRouteStrategy = (
  activatedRouteSnapshot: ActivatedRouteSnapshot,
) => MetadataValues | undefined

export const METADATA_ROUTE_STRATEGY =
  new InjectionToken<MetadataRouteStrategy>(
    ngDevMode ? 'NgxMeta Metadata Route Strategy' : 'NgxMetaMRS',
  )
