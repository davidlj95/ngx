import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'app-meta-set-by-route',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './meta-set-by-route.component.html',
  styleUrl: './meta-set-by-route.component.css',
})
export class MetaSetByRouteComponent {
  protected readonly routeData: unknown
  constructor(readonly activatedRoute: ActivatedRoute) {
    this.routeData = activatedRoute.snapshot.data
  }
}
