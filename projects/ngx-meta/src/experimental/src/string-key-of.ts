export type StringKeyOf<T> = keyof T extends string ? keyof T : never
