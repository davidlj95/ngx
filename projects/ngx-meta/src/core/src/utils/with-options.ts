/**
 *
 * @param options -
 *
 * @alpha
 */
export const withOptions = <T extends object>(
  ...options: ReadonlyArray<T>
): T => options.reduce<T>((acc, curr) => ({ ...acc, ...curr }), {} as T)
