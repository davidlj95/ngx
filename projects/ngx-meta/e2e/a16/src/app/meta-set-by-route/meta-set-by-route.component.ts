import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-meta-set-by-route',
  templateUrl: './meta-set-by-route.component.html',
  styleUrls: ['./meta-set-by-route.component.css'],
})
export class MetaSetByRouteComponent {
  protected readonly routeData: unknown

  constructor(readonly activatedRoute: ActivatedRoute) {
    this.routeData = activatedRoute.snapshot.data
  }
}
