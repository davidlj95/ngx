import { execa, Log } from '../tools/index.js'

export async function install({
  projectDir,
  what,
}: {
  projectDir: string
  what: string
}) {
  Log.step(`Installing ${what}`)
  return execa('pnpm', ['install'], {
    cwd: projectDir,
  })
}
