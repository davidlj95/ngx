import { Injectable, Optional } from '@angular/core'
import { OpenGraph } from '../open-graph'
import { ActivatedRouteSnapshot } from '@angular/router'
import { OpenGraphRouteStrategy } from './open-graph-route-strategy'
import { OpenGraphService } from '../open-graph.service'
import { _DefaultsService } from '@davidlj95/ngx-meta/common'
import { _CurrentRouteDataKeyPathMetadataStrategy } from '@davidlj95/ngx-meta/routing'
import { _GeneralMetadataRouteDataService } from '@davidlj95/ngx-meta/general-metadata'

export const ROUTING_KEY = 'openGraph'

@Injectable()
export class DefaultOpenGraphRouteStrategy implements OpenGraphRouteStrategy {
  constructor(
    private readonly currentRouteDataKeyPathMetadataStrategy: _CurrentRouteDataKeyPathMetadataStrategy,
    @Optional()
    private readonly generalMetadataRouteData: _GeneralMetadataRouteDataService | null,
    private readonly defaultsService: _DefaultsService,
    private readonly openGraphService: OpenGraphService,
  ) {}

  public resolve(routeSnapshot: ActivatedRouteSnapshot): OpenGraph | undefined {
    const openGraph = this.currentRouteDataKeyPathMetadataStrategy.resolve(
      routeSnapshot,
      ROUTING_KEY,
    )
    if (!this.generalMetadataRouteData) {
      return openGraph
    }
    const generalMetadata = this.generalMetadataRouteData.resolve(routeSnapshot)
    const compatibleMetadata: OpenGraph = {
      title: generalMetadata?.title,
      description: generalMetadata?.description,
      image: generalMetadata?.image,
      locale: generalMetadata?.locale,
      url: generalMetadata?.canonicalUrl,
      siteName: generalMetadata?.applicationName,
    }
    if (!openGraph) {
      return compatibleMetadata
    }
    return this.defaultsService.resolve(openGraph, compatibleMetadata)
  }

  public apply(metadata: OpenGraph | undefined): void {
    this.openGraphService.apply(metadata ?? {})
  }
}
