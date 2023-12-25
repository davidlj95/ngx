import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core'
import { MetadataValues } from './metadata-values'
import { DEFAULTS_TOKEN } from './defaults-token'

export function provideCore(
  ...features: ReadonlyArray<CoreFeature>
): EnvironmentProviders {
  return makeEnvironmentProviders([
    ...features.map((feature) => feature._providers),
  ])
}

/**
 * Inspired from Angular router
 *
 * https://github.com/angular/angular/blob/17.0.7/packages/router/src/provide_router.ts#L80-L96
 */
export const enum CoreFeatureKind {
  Defaults,
}
export interface CoreFeature<
  FeatureKind extends CoreFeatureKind = CoreFeatureKind,
> {
  _kind: FeatureKind
  _providers: Provider[]
}

export function coreFeature<FeatureKind extends CoreFeatureKind>(
  kind: FeatureKind,
  providers: Provider[],
): CoreFeature<FeatureKind> {
  return {
    _kind: kind,
    _providers: providers,
  }
}

export function withDefaults(
  defaults: MetadataValues,
): CoreFeature<CoreFeatureKind.Defaults> {
  return coreFeature(CoreFeatureKind.Defaults, [
    { provide: DEFAULTS_TOKEN, useValue: defaults },
  ])
}
