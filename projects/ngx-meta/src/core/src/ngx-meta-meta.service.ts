import { Injectable } from '@angular/core'
import { Meta, MetaDefinition } from '@angular/platform-browser'

/**
 * Upserts (or removes) `<meta>` elements in the current page using Angular's
 * {@link https://angular.dev/api/platform-browser/Meta | Meta} under the hood.
 *
 * @public
 */
@Injectable({ providedIn: 'root' })
export class NgxMetaMetaService {
  constructor(private readonly meta: Meta) {}

  /**
   * Upserts a specific `<meta>` element, defined by a {@link NgxMetaMetaDefinition}
   * to the given content. If `content` is `null` or `undefined`, removes the
   * `<meta>` element from the page.
   *
   * @param definition - `<meta>` element to upsert or remove
   * @param content - Content to set for the `<meta>` element. Or `null` or `undefined` to remove it from the page.
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
 * Models a `<meta>` element which {@link NgxMetaMetaService} can upsert with
 * a given value (or remove if value is not provided or `null`)
 *
 * @remarks
 *
 * Inspired by Angular's {@link https://angular.dev/api/platform-browser/MetaDefinition | MetaDefinition}.
 *
 * Difference is we have the {@link NgxMetaMetaDefinition.attrSelector} to be able
 * to remove the `<meta>` element.
 *
 * And {@link NgxMetaMetaDefinition.withContent} to create an Angular's
 * {@link https://angular.dev/api/platform-browser/MetaDefinition | MetaDefinition}
 * that creates or updates the `<meta>` element in the page.
 *
 * @public
 */
export interface NgxMetaMetaDefinition {
  /**
   * Creates an Angular's
   * {@link https://angular.dev/api/platform-browser/MetaDefinition | MetaDefinition}
   * with the given content
   */
  readonly withContent: (content: string) => MetaDefinition
  /**
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors | Attribute selector}
   * that identifies the `<meta>` in order to remove it when needed.
   *
   * @example
   * For instance, `[name='description']` for the `<meta name='description'>` element
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
