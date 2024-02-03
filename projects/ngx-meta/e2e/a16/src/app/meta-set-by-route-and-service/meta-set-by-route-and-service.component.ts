import { Component, OnInit } from '@angular/core'
import { NgxMetaService } from '@davidlj95/ngx-meta/core'
import { ActivatedRoute } from '@angular/router'
import {
  OPEN_GRAPH_PROFILE_GENDER_FEMALE,
  OPEN_GRAPH_TYPE_BOOK,
  OpenGraphMetadata,
} from '@davidlj95/ngx-meta/open-graph'
import {
  TWITTER_CARD_TYPE_SUMMARY_LARGE_IMAGE,
  TwitterCardsMetadata,
} from '@davidlj95/ngx-meta/twitter-cards'

@Component({
  selector: 'app-meta-set-by-route-and-service',
  templateUrl: './meta-set-by-route-and-service.component.html',
})
export class MetaSetByRouteAndServiceComponent implements OnInit {
  protected readonly routeData: unknown
  protected readonly overriddenMetadata: OpenGraphMetadata &
    TwitterCardsMetadata = {
    openGraph: {
      type: OPEN_GRAPH_TYPE_BOOK,
      profile: {
        gender: OPEN_GRAPH_PROFILE_GENDER_FEMALE,
      },
    },
    twitterCard: {
      card: TWITTER_CARD_TYPE_SUMMARY_LARGE_IMAGE,
    },
  } as const

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
