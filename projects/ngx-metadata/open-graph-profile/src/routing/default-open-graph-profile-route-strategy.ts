import { Injectable } from '@angular/core'
import { OpenGraphProfile } from '../open-graph-profile'
import { ActivatedRouteSnapshot } from '@angular/router'
import { OpenGraphProfileRouteStrategy } from './open-graph-profile-route-strategy'
import { OpenGraphProfileService } from '../open-graph-profile.service'
import { _OPEN_GRAPH_ROUTING_KEY } from 'ngx-metadata/open-graph'
import {
  _CurrentRouteDataKeyPathMetadataStrategy,
  _ROUTING_KEY_SEPARATOR,
} from 'ngx-metadata/routing'

export const ROUTING_KEY = 'profile'
export const ROUTING_KEY_PATH = `${_OPEN_GRAPH_ROUTING_KEY}${_ROUTING_KEY_SEPARATOR}${ROUTING_KEY}`

@Injectable()
export class DefaultOpenGraphProfileRouteStrategy
  implements OpenGraphProfileRouteStrategy
{
  constructor(
    private readonly currentRouteDataKeyPathMetadataStrategy: _CurrentRouteDataKeyPathMetadataStrategy,
    private readonly openGraphProfileService: OpenGraphProfileService,
  ) {}

  public resolve(
    routeSnapshot: ActivatedRouteSnapshot,
  ): OpenGraphProfile | undefined {
    return this.currentRouteDataKeyPathMetadataStrategy.resolve(
      routeSnapshot,
      ROUTING_KEY_PATH,
    )
  }

  public apply(metadata: OpenGraphProfile | undefined): void {
    this.openGraphProfileService.apply(metadata ?? {})
  }
}
