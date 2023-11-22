import { Injectable, Optional } from '@angular/core'
import { OpenGraph } from '../open-graph'
import { ActivatedRouteSnapshot } from '@angular/router'
import { GeneralMetadataRouteDataService } from '../../general-metadata/routing/general-metadata-route-data.service'
import { _DefaultsService } from 'ngx-metadata/common'
import { OpenGraphRouteStrategy } from './open-graph-route-strategy'
import { CurrentRouteDataKeyPathMetadataStrategy } from '../../routing/current-route-data-key-path-metadata-strategy'
import { OpenGraphService } from '../open-graph.service'

export const KEY = 'openGraph'
export const KEY_PATH = `${KEY}`

@Injectable()
export class DefaultOpenGraphRouteStrategy implements OpenGraphRouteStrategy {
  constructor(
    private readonly currentRouteDataKeyPathMetadataStrategy: CurrentRouteDataKeyPathMetadataStrategy,
    @Optional()
    private readonly generalMetadataRouteData: GeneralMetadataRouteDataService | null,
    private readonly defaultsService: _DefaultsService,
    private readonly openGraphService: OpenGraphService,
  ) {}

  public resolve(routeSnapshot: ActivatedRouteSnapshot): OpenGraph | undefined {
    const openGraph = this.currentRouteDataKeyPathMetadataStrategy.resolve(
      routeSnapshot,
      KEY_PATH,
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
