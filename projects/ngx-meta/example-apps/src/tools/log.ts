import Stream from 'stream'

export class Log {
  static info(message: string, ...params: unknown[]) {
    console.info(Log._formatMsg(message, 'ℹ️'), ...params)
  }

  static warn(message: string, ...params: unknown[]) {
    console.warn(Log._formatMsg(message, '⚠️'), ...params)
  }

  static ok(message: string, ...params: unknown[]) {
    console.info(Log._formatMsg(message, '✅ '), ...params)
  }

  static error(message: string, ...params: unknown[]) {
    console.error(Log._formatMsg(message, '❌ '), ...params)
  }

  static debug(message: string, ...params: unknown[]) {
    console.info(Log._formatMsg(message, '🔸'), ...params)
  }

  static item(message: string, ...params: unknown[]) {
    console.info(Log._formatMsg(`    - ${message}`), ...params)
  }

  static step(message: string, ...params: unknown[]) {
    console.info(Log._formatMsg(message, '⚙️'), ...params)
  }

  static stream(stream?: Stream) {
    if (!stream) {
      return
    }
    stream.on('data', (data: Buffer) => {
      const dataString = data.toString()
      const lines = dataString
        .split('\n')
        .filter((line) => line.trim().length > 0)
      lines.forEach((line) => console.log(`${STREAM_LINE_PREFIX}${line}`))
    })
  }

  static _formatMsg(message: string, icon?: string) {
    const prefix = [icon].map((element) => element ?? '').join('')
    const separator = ' '
    return `${prefix.length > 0 ? prefix.concat(separator) : prefix}${message}`
  }
}

const STREAM_LINE_PREFIX = '   '
