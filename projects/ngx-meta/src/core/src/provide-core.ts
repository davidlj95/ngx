import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core'
import { MetadataValues } from './metadata-values'
import { DEFAULTS_TOKEN } from './defaults-token'

export function provideCore(
  ...features: ReadonlyArray<CoreFeature<CoreFeatureKind>>
): EnvironmentProviders {
  return makeEnvironmentProviders([
    ...features.map((feature) => feature._providers),
  ])
}

export const enum CoreFeatureKind {
  Defaults,
}
export interface CoreFeature<FeatureKind extends CoreFeatureKind> {
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
