import { ActivatedRouteSnapshot } from '@angular/router'

export abstract class MetadataRouteStrategy<T> {
  public abstract resolve(routeSnapshot: ActivatedRouteSnapshot): T | undefined

  public abstract apply(metadata: T | undefined): void
}
