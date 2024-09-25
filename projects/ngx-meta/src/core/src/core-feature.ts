import { Provider } from '@angular/core'

/**
 * Inspired from Angular router
 *
 * https://github.com/angular/angular/blob/17.0.7/packages/router/src/provide_router.ts#L80-L96
 * @internal
 */
export const enum __CoreFeatureKind {
  Defaults,
}

/**
 * @internal
 */
export interface __CoreFeature<FeatureKind extends __CoreFeatureKind> {
  _kind: FeatureKind
  _providers: Provider[]
}

/**
 * @internal
 */
export const __coreFeature = <FeatureKind extends __CoreFeatureKind>(
  kind: FeatureKind,
  providers: Provider[],
): __CoreFeature<FeatureKind> => ({
  _kind: kind,
  _providers: providers,
})

/**
 * @internal
 */
export const isCoreFeature = (
  anObject: object,
): anObject is __CoreFeature<__CoreFeatureKind> =>
  ('_providers' satisfies keyof __CoreFeature<__CoreFeatureKind>) in anObject

/**
 * @internal
 */
export type __CoreFeatures = ReadonlyArray<__CoreFeature<__CoreFeatureKind>>

/**
 * @internal
 */
export const __providersFromCoreFeatures = (
  features: __CoreFeatures,
): ReadonlyArray<Provider> => features.map((f) => f._providers)
