import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core'
import { MetadataValues } from './metadata-values'
import { DEFAULTS_TOKEN } from './defaults-token'
import { CORE_PROVIDERS } from './core-providers'

/**
 * Adds core services of the library to the application.
 *
 * For module-based apps, use {@link NgxMetaCoreModule.forRoot} instead
 *
 * Allows specifying some default metadata values. Keep reading.
 *
 * @example
 * To specify some default metadata values, use {@link withNgxMetaDefaults}
 *
 * ```typescript
 * provideNgxMetaCore(
 *   withNgxMetaDefaults({title: 'Default title'})
 * )
 * ```
 *
 * @param features - Features to configure the core with. Currently just {@link withNgxMetaDefaults} available
 *
 * @public
 */
export const provideNgxMetaCore = (
  ...features: ReadonlyArray<CoreFeature>
): EnvironmentProviders =>
  makeEnvironmentProviders([
    ...CORE_PROVIDERS,
    ...features.map((feature) => feature._providers),
  ])

/**
 * Inspired from Angular's router
 *
 * https://github.com/angular/angular/blob/17.0.7/packages/router/src/provide_router.ts#L80-L96
 * @internal
 */
const enum CoreFeatureKind {
  Defaults,
}

/**
 * @internal
 */
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

/**
 * Allows to configure default metadata values.
 *
 * Use it as part of {@link provideNgxMetaCore}
 *
 * For module-based apps, checkout {@link NgxMetaCoreModule.forRoot}
 *
 * @param defaults - Default metadata values to use
 *
 * @public
 */
export const withNgxMetaDefaults = (
  defaults: MetadataValues,
): CoreFeature<CoreFeatureKind.Defaults> =>
  coreFeature(CoreFeatureKind.Defaults, [
    { provide: DEFAULTS_TOKEN, useValue: defaults },
  ])
