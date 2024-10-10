/**
 * @internal
 */
export const _composedMetadataName = (...names: ReadonlyArray<string>) =>
  [...names].join(':')
