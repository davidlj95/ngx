/**
 * Logs a warn message when a value string exceeds a length threshold
 *
 * Useful to warn developers about some metadata improperly used
 *
 * MUST be used with `ngDevMode` so that this message only runs in development
 *
 * @internal
 */
export const _maybeTooLongDevMessage = (
  value: string | undefined | null,
  maxLength: number,
) => {
  if (value && value.length > maxLength) {
    console.warn('String is too long')
  }
}
