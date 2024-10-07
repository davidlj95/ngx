import { inject, InjectionToken } from '@angular/core'
import { DOCUMENT } from '@angular/common'
import { _isDefined } from '../utils'

/**
 * @internal
 */
export const _HEAD_ELEMENT_UPSERT_OR_REMOVE =
  new InjectionToken<_HeadElementUpsertOrRemove>(
    ngDevMode ? 'NgxMeta head element upsert or remove util' : 'NgxMetaHEUOR',
    {
      factory: () => {
        const head = inject(DOCUMENT).head
        return (selector: string, element: HTMLElement | null | undefined) => {
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
    },
  )

/**
 * @internal
 */
export type _HeadElementUpsertOrRemove = (
  selector: string,
  element: HTMLElement | null | undefined,
) => void

/**
 * @internal
 */
export const _injectHeadElementUpsertOrRemove = () =>
  inject(_HEAD_ELEMENT_UPSERT_OR_REMOVE)
