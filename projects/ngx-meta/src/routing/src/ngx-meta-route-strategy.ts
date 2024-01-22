import { InjectionToken } from '@angular/core'
import { ActivatedRouteSnapshot } from '@angular/router'
import { MetadataValues } from '@davidlj95/ngx-meta/core'

export type NgxMetaRouteStrategy = (
  activatedRouteSnapshot: ActivatedRouteSnapshot,
) => MetadataValues | undefined

export const NGX_META_ROUTE_STRATEGY = new InjectionToken<NgxMetaRouteStrategy>(
  ngDevMode ? 'NgxMeta Route Strategy' : 'NgxMetaRS',
)
