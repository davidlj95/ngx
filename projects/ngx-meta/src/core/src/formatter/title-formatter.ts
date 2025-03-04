import { _LazyInjectionToken, _makeInjectionToken } from '../utils'

/**
 * Formats page titles.
 *
 * Default is to provide the page title as is.
 *
 * @internal
 */
export const _titleFormatter: _LazyInjectionToken<TitleFormatter> = () =>
  _makeInjectionToken(
    ngDevMode ? 'Title formatter' : 'TF',
    () => (title) => title,
  )

/**
 * Page title formatter function type
 *
 * Takes the page title as input and returns the formatted title as output.
 *
 * @beta
 */
export type TitleFormatter = (title: string) => string
