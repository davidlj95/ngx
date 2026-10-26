import { execa, Log } from '../tools/index.js'

export async function install({
  projectDir,
  what,
}: {
  projectDir: string
  what: string
}) {
  Log.step(`Installing ${what}`)
  const packagesWithAllowedBuildScripts = [
    '@parcel/watcher',
    'esbuild',
    'lmdb',
    'msgpackr-extract',
  ]
  const allowPackagesArgs = packagesWithAllowedBuildScripts.flatMap(
    (pkgName) => ['--allow-build', pkgName],
  )
  return execa('pnpm', ['install'].concat(allowPackagesArgs), {
    cwd: projectDir,
  })
}
