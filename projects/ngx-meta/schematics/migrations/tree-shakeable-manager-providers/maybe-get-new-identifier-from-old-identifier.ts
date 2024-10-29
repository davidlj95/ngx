import { classify } from '../../external-utils/angular-devkit/core/src/utils/strings'

export const maybeGetNewIdentifierFromOldIdentifier = (
  maybeOldIdentifier: string,
): string | undefined => {
  const maybeNewIdentifier = SPECIAL_IDENTIFIER_MAPPINGS.get(maybeOldIdentifier)
  if (maybeNewIdentifier) {
    return maybeNewIdentifier
  }

  const prefix = OLD_IDENTIFIER_PREFIXES.find((prefix) =>
    maybeOldIdentifier.startsWith(prefix),
  )
  if (!prefix || !maybeOldIdentifier.endsWith(OLD_IDENTIFIER_SUFFIX)) {
    return
  }
  const oldIdentifierNoPrefixNorSuffix = maybeOldIdentifier
    .slice(prefix.length)
    .slice(0, -OLD_IDENTIFIER_SUFFIX.length)
  const metadataModuleClassified = classify(prefix.toLowerCase())
  const metadataNameClassified = classify(
    oldIdentifierNoPrefixNorSuffix.toLowerCase(),
  )
  return `provide${metadataModuleClassified}${metadataNameClassified}`
}

const SPECIAL_IDENTIFIER_MAPPINGS = new Map<string, string>([
  ['JSON_LD_METADATA_PROVIDER', 'provideNgxMetaJsonLd'],
])

const OLD_IDENTIFIER_PREFIXES = [
  'JSON_LD_',
  'OPEN_GRAPH_PROFILE_',
  'OPEN_GRAPH_',
  'STANDARD_',
  'TWITTER_CARD_',
]
const OLD_IDENTIFIER_SUFFIX = '_METADATA_PROVIDER'
