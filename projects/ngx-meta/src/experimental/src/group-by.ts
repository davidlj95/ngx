export function groupBy<T, K>(
  iterable: Iterable<T>,
  selector: (value: T) => K,
): Map<K, ReadonlyArray<T>> {
  const map = new Map<K, ReadonlyArray<T>>()
  for (const value of iterable) {
    const key = selector(value)
    const values = map.get(key)
    map.set(key, values !== undefined ? [...values, value] : [value])
  }
  return map
}
