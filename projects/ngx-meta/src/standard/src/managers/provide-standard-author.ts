import { provideStandardManager } from '../utils/provide-standard-manager'

/**
 * Manages the {@link Standard.author} metadata
 * @public
 */
export const provideStandardAuthor = () => provideStandardManager('author')
