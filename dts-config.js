const path = require('path')
const fs = require('fs')

const NGX_META_DIR = path.join('.', 'projects', 'ngx-meta')
const NGX_META_SRC_DIR = path.join(NGX_META_DIR, 'src')

const entrypoints = []
const getDirectories = (source) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
const getFiles = (source) => fs.readdirSync(source)

console.info('ℹ️ Looking for entry points')
const NG_PACKAGE_JSON_FILENAME = 'ng-package.json'
const ngxMetaSrcSubdirectories = getDirectories(NGX_META_SRC_DIR)
const ngxMetaEntrypoints = ngxMetaSrcSubdirectories.filter((subDirectory) => {
  const ngxMetaSrcSubdirectory = path.join(NGX_META_SRC_DIR, subDirectory)
  const files = getFiles(ngxMetaSrcSubdirectory)
  return files.includes(NG_PACKAGE_JSON_FILENAME)
})
ngxMetaEntrypoints.forEach((entrypoint) => {
  console.info('- ', entrypoint)
})

const entries = ngxMetaEntrypoints.map((entrypoint) => ({
  filePath: path.join(NGX_META_DIR, 'out', entrypoint, 'index.d.ts'),
  outFile: path.join(NGX_META_DIR, 'dist', entrypoint, 'bundled.d.ts'),
  output: {
    exportReferencedTypes: false,
  },
}))

const config = {
  compilationOptions: {
    preferredConfigPath: path.join(NGX_META_SRC_DIR, 'tsconfig.lib.prod.json'),
  },
  entries,
}

module.exports = config
