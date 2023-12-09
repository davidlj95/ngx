// https://stackoverflow.com/a/70144613/3263250
export type FlatType<T> = T extends object
  ? { [K in keyof T]: FlatType<T[K]> }
  : T
