// https://stackoverflow.com/a/8511350/3263250
export function isObject(object: unknown): object is object {
  return object !== null && typeof object === 'object' && !Array.isArray(object)
}
