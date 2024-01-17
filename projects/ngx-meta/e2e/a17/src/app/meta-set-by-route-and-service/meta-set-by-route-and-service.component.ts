import { Component, OnInit } from '@angular/core'
import { MetadataService, MetadataValues } from '@davidlj95/ngx-meta/core'
import { JsonPipe } from '@angular/common'
import { ActivatedRoute } from '@angular/router'
import {
  OPEN_GRAPH_TYPE_BOOK,
  OpenGraphMetadata,
} from '@davidlj95/ngx-meta/open-graph'
import {
  TWITTER_CARD_TYPE_SUMMARY_LARGE_IMAGE,
  TwitterCardMetadata,
} from '@davidlj95/ngx-meta/twitter-card'
import {
  OPEN_GRAPH_PROFILE_GENDER_FEMALE,
  OpenGraphProfileMetadata,
} from '@davidlj95/ngx-meta/open-graph-profile'

@Component({
  selector: 'app-meta-set-by-route-and-service',
  standalone: true,
  templateUrl: './meta-set-by-route-and-service.component.html',
  imports: [JsonPipe],
})
export class MetaSetByRouteAndServiceComponent implements OnInit {
  protected readonly routeData: unknown
  protected readonly overriddenMetadata: OpenGraphMetadata &
    OpenGraphProfileMetadata &
    TwitterCardMetadata = {
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
