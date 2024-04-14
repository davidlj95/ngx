import { fileURLToPath } from 'url'
import { dirname, join, resolve } from 'path'
import * as Stream from 'stream'
import * as process from 'process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export function getE2EAppsDir() {
  return resolve(getE2EDir(), 'apps')
}
function getE2EDir() {
  return resolve(__dirname, '..', '..')
}
export function getRelativeLibraryDistDir() {
  return join('..', '..', '..', 'dist')
}
export function getLibraryDistDir() {
  return resolve(getE2EDir(), '..', 'dist')
}

export function getStandaloneTemplatesDir() {
  return resolve(getE2EDir(), 'templates', 'standalone')
}
export function getModuleTemplatesDir() {
  return resolve(getE2EDir(), 'templates', 'module')
}

/**
 * isMain(import.meta.url)
 * https://2ality.com/2022/07/nodejs-esm-main.html
 */
export function isMain(importMetaUrl: string) {
  const modulePath = fileURLToPath(importMetaUrl)
  return process.argv[1] === modulePath
}

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

export function jsonToString(json: object): string {
  return JSON.stringify(json, null, 2)
}
