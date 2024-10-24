import { provideTwitterCardManager } from '../utils/provide-twitter-card-manager'

/**
 * Manages the {@link TwitterCard.card} metadata
 * @public
 */
export const provideTwitterCardCard = () => provideTwitterCardManager('card')
