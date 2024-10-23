import { execa, Log } from '../tools/index.js'
import { getLibraryName } from '../library/index.js'

export const ngAddLibrary = async (appDir: string) => {
  Log.step(`Running ng-add to set up library`)
  return execa(
    'pnpm',
    [
      'ng',
      'add',
      await getLibraryName(),
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
