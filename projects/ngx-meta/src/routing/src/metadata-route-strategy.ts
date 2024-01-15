import { InjectionToken } from '@angular/core'
import { ActivatedRouteSnapshot } from '@angular/router'

export type MetadataRouteStrategy = <T>(
  activatedRouteSnapshot: ActivatedRouteSnapshot,
) => T | undefined

export const METADATA_ROUTE_STRATEGY = new InjectionToken(
  ngDevMode ? 'NgxMeta Metadata Route Strategy' : 'NgxMetaMRS',
)
