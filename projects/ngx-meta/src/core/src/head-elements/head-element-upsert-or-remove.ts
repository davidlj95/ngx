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
      const document = inject(DOCUMENT)
      const head = document.head
      return (selector, elementFactory) => {
        const existingElement = head.querySelector(selector)
        if (existingElement) {
          head.removeChild(existingElement)
        }

        const element = elementFactory(document)
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
  elementFactory: (document: Document) => HTMLElement | undefined,
) => void
