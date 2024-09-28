import { Injectable } from '@angular/core'
import { Meta, MetaDefinition } from '@angular/platform-browser'

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

/**
 * Models a `<meta>` element which {@link NgxMetaMetaService.set} can manage
 *
 * To create one, you may also use one of these utility functions:
 *
 *  - {@link makeKeyValMetaDefinition}
 *
 *  - {@link makeComposedKeyValMetaDefinition}
 *
 * @remarks
 *
 * Inspired by Angular {@link https://angular.dev/api/platform-browser/MetaDefinition | MetaDefinition}.
 *
 * @public
 */
export interface NgxMetaMetaDefinition {
  /**
   * Creates an Angular {@link https://angular.dev/api/platform-browser/MetaDefinition | MetaDefinition}
   * to create or update the element in the page.
   *
   * With the given content as value of the `<meta>` element.
   *
   * @example
   * For instance, `(content) => ({name: 'description', content})` to create a
   * `<meta name='description' content='{content}'>` element. Where `content` will come from
   * {@link NgxMetaMetaService.set} second argument value.
   */
  withContent(content: string): MetaDefinition

  /**
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors | Attribute selector}
   * to identify the `<meta>` element. In order to remove this specific `<meta>` element when needed.
   *
   * @example
   * For instance, `[name='description']` for the `<meta name='description'>` element.
   */
  readonly attrSelector: string
}

/**
 * Content to be set for a specific `<meta>` element in the page
 *
 * Can be `undefined` or `null`. In that case, the element will be removed.
 *
 * See {@link NgxMetaMetaService}
 *
 * @public
 */
export type NgxMetaMetaContent = string | undefined | null
