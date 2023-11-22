import { Injectable } from '@angular/core'
import { OpenGraphProfile } from '../open-graph-profile'
import { ActivatedRouteSnapshot } from '@angular/router'
import { OpenGraphProfileRouteStrategy } from './open-graph-profile-route-strategy'
import {
  CurrentRouteDataKeyPathMetadataStrategy,
  KEY_PATH_SEPARATOR,
} from '../../routing/current-route-data-key-path-metadata-strategy'
import { OpenGraphProfileService } from '../open-graph-profile.service'
import { KEY as OPEN_GRAPH_KEY } from '../../open-graph/routing/default-open-graph-route-strategy'

export const KEY = 'profile'
export const KEY_PATH = `${OPEN_GRAPH_KEY}${KEY_PATH_SEPARATOR}${KEY}`

@Injectable()
export class DefaultOpenGraphProfileRouteStrategy
  implements OpenGraphProfileRouteStrategy
{
  constructor(
    private readonly currentRouteDataKeyPathMetadataStrategy: CurrentRouteDataKeyPathMetadataStrategy,
    private readonly openGraphProfileService: OpenGraphProfileService,
  ) {}

  public resolve(
    routeSnapshot: ActivatedRouteSnapshot,
  ): OpenGraphProfile | undefined {
    return this.currentRouteDataKeyPathMetadataStrategy.resolve(
      routeSnapshot,
      KEY_PATH,
    )
  }

  public apply(metadata: OpenGraphProfile | undefined): void {
    this.openGraphProfileService.apply(metadata ?? {})
  }
}
