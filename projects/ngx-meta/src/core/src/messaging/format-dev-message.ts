/**
 * @internal
 */
export interface _FormatDevMessageOptions {
  module: string
  property?: string
  value?: string | null
  link?: string
}

/**
 * @internal
 */
export const _formatDevMessage = (
  message: string,
  options: _FormatDevMessageOptions,
): string => {
  const header = [`ngx-meta/${options.module}:`, options.property, message]
    .filter((s) => !!s)
    .join(' ')
  const body = options.value ? `-> Value: "${options.value}"` : undefined
  const footer = options.link
    ? `For more information, see ${options.link}`
    : undefined
  return [header, body, footer].filter((s) => !!s).join('\n')
}
