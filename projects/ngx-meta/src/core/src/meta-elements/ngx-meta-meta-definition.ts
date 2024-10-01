import { MetaDefinition } from '@angular/platform-browser'

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
  readonly withContent: (content: string) => MetaDefinition

  /**
   * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors | Attribute selector}
   * to identify the `<meta>` element. In order to remove this specific `<meta>` element when needed.
   *
   * @example
   * For instance, `[name='description']` for the `<meta name='description'>` element.
   */
  readonly attrSelector: string
}
