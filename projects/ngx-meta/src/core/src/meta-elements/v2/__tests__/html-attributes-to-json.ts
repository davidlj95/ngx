export const htmlAttributesToJson = (attributes: NamedNodeMap): object =>
  [...Array(attributes.length).keys()]
    .map((index) => attributes.item(index))
    .map((item) => (item ? { [item.name]: item.value } : {}))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {})
