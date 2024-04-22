import { Component, OnInit } from '@angular/core'
import { NgxMetaService } from '@davidlj95/ngx-meta/core'
import { ActivatedRoute } from '@angular/router'
import ROUTE_SERVICE_OVERRIDES_JSON from '@/e2e/cypress/fixtures/route-service-overrides.json'

@Component({
  selector: 'app-meta-set-by-route-and-service',
  templateUrl: './meta-set-by-route-and-service.component.html',
})
export class MetaSetByRouteAndServiceComponent implements OnInit {
  protected readonly routeData: unknown
  protected readonly overriddenMetadata = ROUTE_SERVICE_OVERRIDES_JSON

  constructor(
    activatedRoute: ActivatedRoute,
    private readonly ngxMetaService: NgxMetaService,
  ) {
    this.routeData = activatedRoute.snapshot.data
  }

  ngOnInit(): void {
    this.ngxMetaService.set(this.overriddenMetadata)
  }
}
