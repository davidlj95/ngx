import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-meta-set-by-route',
  templateUrl: './meta-set-by-route.component.html',
})
export class MetaSetByRouteComponent {
  protected readonly routeData: unknown

  constructor(activatedRoute: ActivatedRoute) {
    this.routeData = activatedRoute.snapshot.data
  }
}
