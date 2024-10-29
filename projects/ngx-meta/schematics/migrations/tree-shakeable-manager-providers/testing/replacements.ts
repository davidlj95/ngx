export class ModuleReplacements {
  constructor(public readonly identifierReplacements: Record<string, string>) {}

  getOldIdentifiersLines() {
    return Object.keys(this.identifierReplacements).join(',\n')
  }

  getNewIdentifiersLines() {
    return Object.values(this.identifierReplacements).join(',\n')
  }

  getOldUsagesLines() {
    return Object.keys(this.identifierReplacements).join(',\n')
  }

  getNewUsagesLines() {
    return Object.values(this.identifierReplacements)
      .map((newIdentifier) => `${newIdentifier}()`)
      .join(',\n')
  }
}

export const JSON_LD_REPLACEMENTS: ModuleReplacements = new ModuleReplacements({
  JSON_LD_METADATA_PROVIDER: 'provideNgxMetaJsonLd',
})

export const OPEN_GRAPH_REPLACEMENTS = new ModuleReplacements({
  OPEN_GRAPH_TITLE_METADATA_PROVIDER: 'provideOpenGraphTitle',
  OPEN_GRAPH_TYPE_METADATA_PROVIDER: 'provideOpenGraphType',
  OPEN_GRAPH_IMAGE_METADATA_PROVIDER: 'provideOpenGraphImage',
  OPEN_GRAPH_URL_METADATA_PROVIDER: 'provideOpenGraphUrl',
  OPEN_GRAPH_DESCRIPTION_METADATA_PROVIDER: 'provideOpenGraphDescription',
  OPEN_GRAPH_LOCALE_METADATA_PROVIDER: 'provideOpenGraphLocale',
  OPEN_GRAPH_SITE_NAME_METADATA_PROVIDER: 'provideOpenGraphSiteName',
})

export const OPEN_GRAPH_PROFILE_REPLACEMENTS = new ModuleReplacements({
  OPEN_GRAPH_PROFILE_FIRST_NAME_METADATA_PROVIDER:
    'provideOpenGraphProfileFirstName',
  OPEN_GRAPH_PROFILE_LAST_NAME_METADATA_PROVIDER:
    'provideOpenGraphProfileLastName',
  OPEN_GRAPH_PROFILE_USERNAME_METADATA_PROVIDER:
    'provideOpenGraphProfileUsername',
  OPEN_GRAPH_PROFILE_GENDER_METADATA_PROVIDER: 'provideOpenGraphProfileGender',
})
export const STANDARD_REPLACEMENTS = new ModuleReplacements({
  STANDARD_TITLE_METADATA_PROVIDER: 'provideStandardTitle',
  STANDARD_DESCRIPTION_METADATA_PROVIDER: 'provideStandardDescription',
  STANDARD_AUTHOR_METADATA_PROVIDER: 'provideStandardAuthor',
  STANDARD_KEYWORDS_METADATA_PROVIDER: 'provideStandardKeywords',
  STANDARD_GENERATOR_METADATA_PROVIDER: 'provideStandardGenerator',
  STANDARD_APPLICATION_NAME_METADATA_PROVIDER: 'provideStandardApplicationName',
  STANDARD_CANONICAL_URL_METADATA_PROVIDER: 'provideStandardCanonicalUrl',
  STANDARD_LOCALE_METADATA_PROVIDER: 'provideStandardLocale',
  STANDARD_THEME_COLOR_METADATA_PROVIDER: 'provideStandardThemeColor',
})
export const TWITTER_CARD_REPLACEMENTS = new ModuleReplacements({
  TWITTER_CARD_CARD_METADATA_PROVIDER: 'provideTwitterCardCard',
  TWITTER_CARD_SITE_METADATA_PROVIDER: 'provideTwitterCardSite',
  TWITTER_CARD_CREATOR_METADATA_PROVIDER: 'provideTwitterCardCreator',
  TWITTER_CARD_DESCRIPTION_METADATA_PROVIDER: 'provideTwitterCardDescription',
  TWITTER_CARD_TITLE_METADATA_PROVIDER: 'provideTwitterCardTitle',
  TWITTER_CARD_IMAGE_METADATA_PROVIDER: 'provideTwitterCardImage',
})
