import { ActivatedRouteSnapshot } from '@angular/router'
import { MetadataValues } from '@davidlj95/ngx-meta/core'

export abstract class MetadataRouteStrategy<
  Metadata extends MetadataValues = MetadataValues,
> {
  public abstract resolve(
    routeSnapshot: ActivatedRouteSnapshot,
  ): Metadata | undefined

  public abstract set(metadata: Metadata | undefined): void
}
