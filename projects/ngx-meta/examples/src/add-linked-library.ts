import {
  getLibraryDistDir,
  getRelativeLibraryDistDir,
  jsonToString,
  Log,
} from './utils.js'
import { join } from 'path'
import { PACKAGE_JSON } from './constants.js'
import { readFile, writeFile } from 'fs/promises'

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
  const appPkgJsonFile = join(appDir, PACKAGE_JSON)
  const [libPkgJson, appPkgJson] = (
    await Promise.all([
      readFile(join(getLibraryDistDir(), PACKAGE_JSON), 'utf8'),
      readFile(appPkgJsonFile, 'utf8'),
    ])
  ).map(
    (data) =>
      JSON.parse(data) as {
        name: string
        dependencies: Record<string, string>
      },
  )

  //👇 Can't use link: protocol (default when you pnpm i <relativeDir>)
  //   When building SSR target if using `@nguniversal`, it fails
  //   Even with preserveSymlinks: true in angular.json + hoisted node-linker
  appPkgJson.dependencies[libPkgJson.name] =
    `file:${getRelativeLibraryDistDir()}`
  await writeFile(appPkgJsonFile, jsonToString(appPkgJson))
}
