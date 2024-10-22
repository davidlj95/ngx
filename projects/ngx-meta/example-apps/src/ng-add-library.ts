import { getLibraryDistDir, Log } from './utils.js'
import { execa } from './execa.js'
import { readPackageJsonInDir } from './read-package-json-in-dir.js'

export const ngAddLibrary = async (appDir: string) => {
  Log.step(`Running ng-add to set up library`)
  const libraryPackageJson = await readPackageJsonInDir(getLibraryDistDir())
  return execa(
    'pnpm',
    [
      'ng',
      'add',
      libraryPackageJson.name,
      '--skip-confirmation',
      '--routing',
      '--metadata-modules',
      'json-ld',
      'open-graph',
      'open-graph-profile',
      'standard',
      'twitter-card',
    ],
    {
      cwd: appDir,
    },
  )
}
