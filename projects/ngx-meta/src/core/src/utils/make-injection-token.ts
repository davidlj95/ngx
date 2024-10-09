import { InjectionToken } from '@angular/core'
import { _formatDevMessage } from '../messaging'
import { MODULE_NAME } from '../module-name'

export const INJECTION_TOKENS = new Map<string, InjectionToken<unknown>>()
export const INJECTION_TOKEN_FACTORIES = new Map<string, () => unknown>()

/**
 * Creates an injection token with the given factory function if it doesn't exist.
 * To determine if an injection token exists, the description string is used.
 *
 * Useful to create {@link _LazyInjectionToken}s.

 * \> The function can't be used to create a lazy injection token directly
 * \> As a function call won't be tree-shaken. Which is the main purpose of lazy tokens.
 * \> More in https://github.com/davidlj95/ngx/pull/902
 *
 * It also adds the library name as prefix to the injection token description.
 * In order to locate library's injectable easily when debugging an Angular project.
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
  INJECTION_TOKENS.set(description, injectionToken)
  /* istanbul ignore next https://github.com/istanbuljs/istanbuljs/issues/719 */
  if (ngDevMode) {
    if (
      (INJECTION_TOKEN_FACTORIES.get(description)?.toString() ??
        factory.toString()) !== factory.toString()
    ) {
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
  return injectionToken
}
