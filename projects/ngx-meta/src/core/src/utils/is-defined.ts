/**
 * Typescript's type guard helper to ensure a value is neither `null` nor `undefined`.
 *
 * @param value - Value to check
 *
 * @internal
 */
export const _isDefined = <T>(value: T | null | undefined): value is T =>
  value !== null && value !== undefined
