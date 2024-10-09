import { inject } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { _isDefined, _LazyInjectionToken, _makeInjectionToken } from '../utils'

/**
 * @internal
 */
export const _headElementUpsertOrRemove: _LazyInjectionToken<
  _HeadElementUpsertOrRemove
> = () =>
  _makeInjectionToken(
    ngDevMode ? 'Head element upsert or remove util' : 'HEUOR',
    () => {
      const head = inject(DOCUMENT).head
      return (selector, element) => {
        const existingScriptElement = head.querySelector(selector)
        if (existingScriptElement) {
          head.removeChild(existingScriptElement)
        }

        if (!_isDefined(element)) {
          return
        }
        head.appendChild(element)
      }
    },
  )

/**
 * @internal
 */
export type _HeadElementUpsertOrRemove = (
  selector: string,
  element: HTMLElement | null | undefined,
) => void
