import { Log } from './utils.js'
import { execa } from './execa.js'

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
