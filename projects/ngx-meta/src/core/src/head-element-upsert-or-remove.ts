import { FactoryProvider, InjectionToken } from '@angular/core'
import { DOCUMENT } from '@angular/common'

export const __HEAD_ELEMENT_UPSERT_OR_REMOVE_FACTORY =
  (doc: Document) =>
  (selector: string, element: HTMLElement | null | undefined) => {
    const existingScriptElement = doc.head.querySelector(selector)
    if (existingScriptElement) {
      doc.head.removeChild(existingScriptElement)
    }

    if (element === null || element === undefined) {
      return
    }
    doc.head.appendChild(element)
  }

export type _HeadElementUpsertOrRemove = (
  selector: string,
  element: HTMLElement | null | undefined,
) => void

export const _HEAD_ELEMENT_UPSERT_OR_REMOVE =
  new InjectionToken<_HeadElementUpsertOrRemove>(
    ngDevMode ? 'NgxMeta head element upsert or remove util' : 'NgxMetaHEUOR',
  )
export const __HEAD_ELEMENT_UPSERT_OR_REMOVE_PROVIDER: FactoryProvider = {
  provide: _HEAD_ELEMENT_UPSERT_OR_REMOVE,
  useFactory: __HEAD_ELEMENT_UPSERT_OR_REMOVE_FACTORY,
  deps: [DOCUMENT],
}
