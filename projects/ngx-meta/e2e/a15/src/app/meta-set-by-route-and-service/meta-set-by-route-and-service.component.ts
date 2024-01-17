import { Component, OnInit } from '@angular/core'
import { MetadataService, MetadataValues } from '@davidlj95/ngx-meta/core'
import { ActivatedRoute } from '@angular/router'
import {
  OpenGraphMetadata,
  OpenGraphType,
} from '@davidlj95/ngx-meta/open-graph'
import {
  TwitterCardMetadata,
  TwitterCardType,
} from '@davidlj95/ngx-meta/twitter-card'
import {
  OpenGraphProfileGender,
  OpenGraphProfileMetadata,
} from '@davidlj95/ngx-meta/open-graph-profile'

@Component({
  selector: 'app-meta-set-by-route-and-service',
  templateUrl: './meta-set-by-route-and-service.component.html',
})
export class MetaSetByRouteAndServiceComponent implements OnInit {
  protected readonly routeData: unknown
  protected readonly overriddenMetadata: OpenGraphMetadata &
    OpenGraphProfileMetadata &
    TwitterCardMetadata = {
    openGraph: {
      type: OpenGraphType.Book,
      profile: {
        gender: OpenGraphProfileGender.Female,
      },
    },
    twitterCard: {
      card: TwitterCardType.SummaryLargeImage,
    },
  }

  constructor(
    activatedRoute: ActivatedRoute,
    private readonly metadataService: MetadataService,
  ) {
    this.routeData = activatedRoute.snapshot.data
  }

  ngOnInit(): void {
    this.metadataService.set(
      this.overriddenMetadata as unknown as MetadataValues,
    )
  }
}
