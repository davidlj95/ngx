import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'app-all-meta-set-by-route',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './all-meta-set-by-route.component.html',
})
export class AllMetaSetByRouteComponent {
  protected readonly routeData: unknown

  constructor(activatedRoute: ActivatedRoute) {
    this.routeData = activatedRoute.snapshot.data
  }
}
