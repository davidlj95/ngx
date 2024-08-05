import {
  _formatDevMessage,
  _FormatDevMessageOptions,
} from './format-dev-message'

/**
 * Logs a warn message when a value string exceeds a length threshold
 *
 * Useful to warn developers about some metadata improperly used
 *
 * MUST be used with `ngDevMode` so that this message only runs in development
 *
 * @internal
 */
/* istanbul ignore next https://github.com/istanbuljs/istanbuljs/issues/719 */
export const _maybeTooLongDevMessage = (
  value: string | undefined | null,
  maxLength: number,
  opts: _FormatDevMessageOptions,
) => {
  if (value && value.length > maxLength) {
    console.warn(
      _formatDevMessage(`exceeds recommended size of ${maxLength} chars`, opts),
    )
  }
}
