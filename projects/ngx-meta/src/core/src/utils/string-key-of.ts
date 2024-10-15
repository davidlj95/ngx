/**
 * @internal
 */
export type StringKeyOf<T = object> = Extract<keyof T, string>
