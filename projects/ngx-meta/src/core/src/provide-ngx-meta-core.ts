import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core'
import { MetadataValues } from './metadata-values'
import { DEFAULTS_TOKEN } from './defaults-token'
import { CORE_PROVIDERS } from './core-providers'

export const provideNgxMetaCore = (
  ...features: ReadonlyArray<CoreFeature>
): EnvironmentProviders =>
  makeEnvironmentProviders([
    ...CORE_PROVIDERS,
    ...features.map((feature) => feature._providers),
  ])

/**
 * Inspired from Angular router
 *
 * https://github.com/angular/angular/blob/17.0.7/packages/router/src/provide_router.ts#L80-L96
 */
const enum CoreFeatureKind {
  Defaults,
}
interface CoreFeature<FeatureKind extends CoreFeatureKind = CoreFeatureKind> {
  _kind: FeatureKind
  _providers: Provider[]
}

const coreFeature = <FeatureKind extends CoreFeatureKind>(
  kind: FeatureKind,
  providers: Provider[],
): CoreFeature<FeatureKind> => ({
  _kind: kind,
  _providers: providers,
})

export const withNgxMetaDefaults = (
  defaults: MetadataValues,
): CoreFeature<CoreFeatureKind.Defaults> =>
  coreFeature(CoreFeatureKind.Defaults, [
    { provide: DEFAULTS_TOKEN, useValue: defaults },
  ])
