import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core'
import { MetadataValues } from './metadata-values'
import { DEFAULTS_TOKEN } from './defaults-token'
import { HEAD_ELEMENT_UPSERT_OR_REMOVE_PROVIDER } from './head-element-upsert-or-remove'
import { METADATA_RESOLVER_PROVIDER } from './metadata-resolver'
import { MetadataRegistry } from './metadata-registry'

export const CORE_PROVIDERS = [
  HEAD_ELEMENT_UPSERT_OR_REMOVE_PROVIDER,
  METADATA_RESOLVER_PROVIDER,
  MetadataRegistry,
]

export function provideCore(
  ...features: ReadonlyArray<CoreFeature>
): EnvironmentProviders {
  return makeEnvironmentProviders([
    ...CORE_PROVIDERS,
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
