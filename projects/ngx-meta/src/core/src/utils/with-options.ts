/**
 * Helper function to combine multiple options (objects).
 *
 * In case of specifying same options more than once, the latter one will take precedence.
 * Provide them sorted by ascendant priority. Less priority options first. Top priority options last.
 *
 * Can be used to combine options for:
 *
 * - {@link provideNgxMetaManager}
 *
 * @param options - Options to combine.
 *
 * @alpha
 */
export const withOptions = <T extends object>(
  ...options: ReadonlyArray<T>
): T => options.reduce<T>((acc, curr) => ({ ...acc, ...curr }), {} as T)