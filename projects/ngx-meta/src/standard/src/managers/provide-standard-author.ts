import { provideStandardManager } from '../utils/provide-standard-manager'

/**
 * Manages the {@link Standard.author} metadata
 * @public
 */
export const provideStandardAuthor = () => provideStandardManager('author')

/**
 * {@inheritDoc provideStandardAuthor}
 * @deprecated Use {@link provideStandardAuthor} instead
 * @public
 */
export const STANDARD_AUTHOR_METADATA_PROVIDER =
  /* @__PURE__ */
  provideStandardAuthor()
