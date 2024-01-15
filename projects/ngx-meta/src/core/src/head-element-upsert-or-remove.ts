import { FactoryProvider, InjectionToken } from '@angular/core'
import { DOCUMENT } from '@angular/common'

export const HEAD_ELEMENT_UPSERT_OR_REMOVE_FACTORY =
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

export type HeadElementUpsertOrRemove = (
  selector: string,
  element: HTMLElement | null | undefined,
) => void

export const HEAD_ELEMENT_UPSERT_OR_REMOVE =
  new InjectionToken<HeadElementUpsertOrRemove>(
    ngDevMode ? 'Head element upsert or remove' : 'NgxMetaHUOR',
  )
export const HEAD_ELEMENT_UPSERT_OR_REMOVE_PROVIDER: FactoryProvider = {
  provide: HEAD_ELEMENT_UPSERT_OR_REMOVE,
  useFactory: HEAD_ELEMENT_UPSERT_OR_REMOVE_FACTORY,
  deps: [DOCUMENT],
}
