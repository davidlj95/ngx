import { execa, Log } from '../tools/index.js'
import { readPackageJsonInDir } from '../package-json/index.js'
import { getLibraryDistDir } from '../utils/index.js'

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
