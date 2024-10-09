import { InjectionToken } from '@angular/core'
import { _formatDevMessage } from '../messaging'
import { MODULE_NAME } from '../module-name'

export const INJECTION_TOKENS = new Map<string, InjectionToken<unknown>>()
export const INJECTION_TOKEN_FACTORIES = new Map<string, () => unknown>()

/**
 * See https://github.com/davidlj95/ngx/pull/892
 *
 * @internal
 */
export const _makeInjectionToken: <T>(
  description: string,
  factory: () => T,
) => InjectionToken<T> = (description, factory) => {
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
