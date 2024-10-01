import { Provider } from '@angular/core'

/**
 * Inspired from Angular router
 *
 * https://github.com/angular/angular/blob/17.0.7/packages/router/src/provide_router.ts#L80-L96
 * @internal
 */
export const enum CoreFeatureKind {
  Defaults,
}

/**
 * @internal
 */
export interface CoreFeature<FeatureKind extends CoreFeatureKind> {
  _kind: FeatureKind
  _providers: Provider[]
}

export const coreFeature = <FeatureKind extends CoreFeatureKind>(
  kind: FeatureKind,
  providers: Provider[],
): CoreFeature<FeatureKind> => ({
  _kind: kind,
  _providers: providers,
})

export const isCoreFeature = (
  anObject: object,
): anObject is CoreFeature<CoreFeatureKind> =>
  ('_providers' satisfies keyof CoreFeature<CoreFeatureKind>) in anObject

/**
 * @internal
 */
export type CoreFeatures = ReadonlyArray<CoreFeature<CoreFeatureKind>>

export const providersFromCoreFeatures = (
  features: CoreFeatures,
): ReadonlyArray<Provider> => features.map((f) => f._providers)
