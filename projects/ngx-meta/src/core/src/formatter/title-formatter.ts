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
 * @param titleFormatter - Title to format. The one specified in metadata values.
 * @returns Formatted title
 *
 * @beta
 */
export type TitleFormatter = (title: string) => string
