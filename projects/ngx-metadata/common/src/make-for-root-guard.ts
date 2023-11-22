import {
  FactoryProvider,
  InjectionToken,
  Optional,
  SkipSelf,
  Type,
} from '@angular/core'

/**
 * Helps to make a `forRoot` guard to ensure a module is not imported
 * multiple times using `forRoot`
 *
 * Usage:
 *
 * ```
 * const [FOR_ROOT_GUARD_TOKEN, FOR_ROOT_GUARD_PROVIDER] = makeForRootGuard(
 *  'module name',
 *  [ToBeGuardedService, ToBeGuardedToken]
 * )
 *
 * // In module's constructor:
 * constructor(@Optional() @Inject(FOR_ROOT_GUARD_TOKEN) guard: unknown) {}
 *
 * // In module's `forRoot` providers:
 * const providers = [
 *   FOR_ROOT_GUARD_PROVIDER
 * ]
 * ```
 *
 * @see https://github.com/angular/angular/blob/17.0.3/packages/router/src/router_module.ts#L34-L39
 * @see https://github.com/angular/angular/blob/17.0.3/packages/router/src/router_module.ts#L84
 * @see https://github.com/angular/angular/blob/17.0.3/packages/router/src/router_module.ts#L113-L117
 * @see https://github.com/angular/angular/blob/17.0.3/packages/router/src/router_module.ts#L187-L195
 */
export const makeForRootGuard = (
  moduleName: string,
  ...depsToGuard: (InjectionToken<unknown> | Type<unknown>)[]
): [InjectionToken<void>, FactoryProvider] => {
  const injectionToken = new InjectionToken<void>(
    `${moduleName} forRoot() guard`,
  )
  const provider: FactoryProvider = {
    provide: injectionToken,
    useFactory: (...depsToGuard: unknown[]) => {
      const definedDependencies = depsToGuard.filter(
        (depToGuard) => !!depToGuard,
      )
      if (definedDependencies.length > 0) {
        throw new Error(
          `One or more dependencies for ${moduleName} was provided ` +
            'more than once. This can happen if `forRoot` is used outside of ' +
            'the root injector',
        )
      }
    },
    deps: depsToGuard.map((depToGuard) => [
      depToGuard,
      new Optional(),
      new SkipSelf(),
    ]),
  }
  return [injectionToken, provider]
}
