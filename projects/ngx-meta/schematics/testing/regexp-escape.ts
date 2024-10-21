// https://stackoverflow.com/a/9310752/3263250
// https://github.com/tc39/proposal-regex-escaping
export const regexpEscape = (string: string) =>
  string.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
