import { fileURLToPath } from 'url'
import { dirname, join, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export function getAppsDir() {
  return resolve(getExampleAppsDir(), 'apps')
}
function getExampleAppsDir() {
  return resolve(__dirname, '..')
}

export function getRelativeLibraryE2EDir() {
  return join('..', '..', '..', 'e2e')
}
export function getLibraryDistDir() {
  return resolve(getExampleAppsDir(), '..', 'dist')
}

export function getStandaloneTemplatesDir() {
  return resolve(getTemplatesDir(), 'standalone')
}
export function getModuleTemplatesDir() {
  return resolve(getTemplatesDir(), 'module')
}

export function getTemplatesDir() {
  return resolve(getExampleAppsDir(), 'templates')
}
