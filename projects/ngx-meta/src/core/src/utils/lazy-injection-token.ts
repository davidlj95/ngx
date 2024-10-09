import { InjectionToken } from '@angular/core'

/**
 * Thunk to delay the instantiation of a new injection token.
 *
 * This way the injection token and its factory definition can be tree-shaken if unused.
 * As their factory functions can bring many unused bytes to the production bundle.
 *
 * See also:
 *
 * - {@link https://github.com/davidlj95/ngx/pull/892 | PR where need for this was discovered}
 *
 * - {@link https://en.wikipedia.org/wiki/Thunk | Thunk definition (computer science)}
 *
 * - {@link https://github.com/davidlj95/ngx/pull/903 | Why can't create a helper function to create them}
 *
 * @internal
 */
export type _LazyInjectionToken<T> = () => InjectionToken<T>
