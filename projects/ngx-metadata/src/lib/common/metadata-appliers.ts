export type MetadataAppliers<T extends object> = {
  [key in keyof T]-?: (value: T[key]) => void
}
