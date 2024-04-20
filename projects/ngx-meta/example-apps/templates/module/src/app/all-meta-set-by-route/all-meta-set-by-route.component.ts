import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-all-meta-set-by-route',
  templateUrl: './all-meta-set-by-route.component.html',
})
export class AllMetaSetByRouteComponent {
  protected readonly routeData: unknown

  constructor(activatedRoute: ActivatedRoute) {
    this.routeData = activatedRoute.snapshot.data
  }
}
