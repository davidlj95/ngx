// https://stackoverflow.com/a/8511350/3263250
export const isObject = (object: unknown): object is object =>
  object !== null && typeof object === 'object' && !Array.isArray(object)
