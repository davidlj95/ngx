// https://stackoverflow.com/a/59499895/3263250
export {}

// https://github.com/angular/angular/blob/17.0.7/packages/core/src/util/ng_dev_mode.ts#L26
declare global {
  /**
   * Used to know if we're in dev mode, in the same fashion Angular does
   *
   * Public API `isDevMode` (https://angular.dev/api/core/isDevMode) is more
   * stable. However, given it's a function call, code under `if(isDevMode())`
   * can not tree-shaken. So to allow tree-shaking, using a `const` in the
   * same fashion Angular does for their packages. Simplifying the type to be
   * just an object, to avoid
   *
   * For instance:
   * https://github.com/angular/angular/blob/17.0.7/packages/router/src/router_module.ts#L38-L39
   */
  const ngDevMode: null | undefined | object
}
