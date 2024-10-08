import { InjectionToken } from '@angular/core'
import { _formatDevMessage } from '../messaging'
import { MODULE_NAME } from '../module-name'

export const INJECTION_TOKENS = new Map<string, InjectionToken<unknown>>()
export const INJECTION_TOKEN_FACTORIES = new Map<string, () => unknown>()

/**
 * A utility function to create lazy injection tokens.
 *
 * See {@link _LazyInjectionToken} for more information.
 *
 * @internal
 */
export const _lazyInjectionToken: <T>(
  description: string,
  factory: () => T,
) => _LazyInjectionToken<T> = (description, factory) => () => {
  const injectionToken =
    INJECTION_TOKENS.get(description) ??
    new InjectionToken(`ngx-meta ${description}`, { factory })
  /* istanbul ignore next https://github.com/istanbuljs/istanbuljs/issues/719 */
  if (ngDevMode) {
    if ((INJECTION_TOKEN_FACTORIES.get(description) ?? factory) !== factory) {
      console.warn(
        _formatDevMessage(
          [
            'trying to create an injection token with same description but different factory. ',
            'The existing injection token will be used and this new factory will be ignored. ',
            'This use case is a bit weird anyway. Ensure no duplicate injection tokens are created. ',
          ].join('\n'),
          {
            module: MODULE_NAME,
            value: description,
          },
        ),
      )
    }
    INJECTION_TOKEN_FACTORIES.set(description, factory)
  }
  INJECTION_TOKENS.set(description, injectionToken)
  return injectionToken
}

/**
 * Thunk to delay the instantiation of a new injection token.
 * This way they can be tree-shaken if unused.
 * As their factory functions can bring many unused bytes to the production bundle.
 *
 * See also:
 *
 * - {@link https://github.com/davidlj95/ngx/pull/892 | PR where need for this was discovered}
 *
 * - {@link https://en.wikipedia.org/wiki/Thunk | Thunk definition (computer science)}
 *
 * @internal
 */
export type _LazyInjectionToken<T> = () => InjectionToken<T>
