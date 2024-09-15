import {
  _formatDevMessage,
  _FormatDevMessageOptions,
} from './format-dev-message'

/**
 * Logs an error message about a URL not being HTTP or HTTPs
 *
 * Useful to warn developers about some metadata that requires absolute HTTP
 * or HTTPs URLs
 *
 * MUST be used with `ngDevMode` so that this message only runs in development
 *
 * @internal
 */
/* istanbul ignore next https://github.com/istanbuljs/istanbuljs/issues/719 */
export const _maybeNonHttpUrlDevMessage = (
  url: string | URL | undefined | null,
  opts: _FormatDevMessageOptions & { shouldInsteadOfMust?: boolean },
) => {
  const urlStr = url?.toString()
  if (urlStr && !(urlStr.startsWith('http') || urlStr.startsWith('https'))) {
    const shouldOrMust = opts.shouldInsteadOfMust ? 'should' : 'must'
    console.warn(
      _formatDevMessage(
        `URL ${shouldOrMust} be absolute and use either http or https`,
        opts,
      ),
    )
  }
}
