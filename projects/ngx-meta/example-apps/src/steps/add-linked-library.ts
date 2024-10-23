import { Log } from '../tools/index.js'
import {
  readPackageJsonInDir,
  writePackageJsonInDir,
} from '../package-json/index.js'
import { getLibraryDistDir } from '../utils/index.js'
import { join } from 'path'

const RELATIVE_DIST_DIR = join('..', '..', '..', 'dist')

/**
 * Due to caching lockfile in CI/CD, cannot use `pnpm add/install`
 * because that would be run twice:
 * - When installing Angular deps (`pnpm i`)
 * - When installing the library (`pnpm add <libDir>`)
 * So the cached lockfile would include library, but then when running
 * `pnpm i` with cached lockfile, `specifiers` section would be out of sync
 * given lockfile contains library, but package.json does not (yet)
 * See https://github.com/davidlj95/ngx/pull/518
 */
export async function addLinkedLibrary(appDir: string) {
  Log.step('Adding linked library')
  const [libPkgJson, appPkgJson] = await Promise.all(
    [getLibraryDistDir(), appDir].map(readPackageJsonInDir),
  )

  //👇 Can't use link: protocol (default when you pnpm i <relativeDir>)
  //   When building SSR target if using `@nguniversal`, it fails
  //   Even with preserveSymlinks: true in angular.json + hoisted node-linker
  appPkgJson.dependencies[libPkgJson.name] = `file:${RELATIVE_DIST_DIR}`
  await writePackageJsonInDir(appDir, appPkgJson)
}
