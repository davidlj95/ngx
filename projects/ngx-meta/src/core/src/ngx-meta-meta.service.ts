import { Injectable } from '@angular/core'
import { Meta } from '@angular/platform-browser'
import { NgxMetaMetaDefinition } from './ngx-meta-meta-definition'
import { NgxMetaMetaContent } from './ngx-meta-meta-content'

/**
 * Inserts, updates or removes `<meta>` elements in the current page.
 *
 * Uses Angular {@link https://angular.dev/api/platform-browser/Meta | Meta} APIs under the hood.
 *
 * @public
 */
@Injectable({ providedIn: 'root' })
export class NgxMetaMetaService {
  constructor(private readonly meta: Meta) {}

  /**
   * Creates, updates or removes a specific `<meta>` element.
   *
   * The element is modeled using a {@link NgxMetaMetaDefinition} object.
   *
   * The element is created with the provided content. If no content is given, element is removed.
   *
   * @param definition - `<meta>` element to upsert or remove
   * @param content - Content value to create or update the `<meta>` element.
   *                  Use `null` or `undefined` to remove the element from the page.
   */
  set(definition: NgxMetaMetaDefinition, content: NgxMetaMetaContent) {
    switch (content) {
      case undefined:
      case null:
        this.meta.removeTag(definition.attrSelector)
        return
      default:
        this.meta.updateTag(definition.withContent(content))
    }
  }
}
