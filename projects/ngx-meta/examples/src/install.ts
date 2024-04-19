import { Log } from './utils.js'
import { execa } from 'execa'

export async function install({
  projectDir,
  what,
}: {
  projectDir: string
  what: string
}) {
  Log.step(`Installing ${what}`)
  const installCommand = execa('pnpm', ['install'], {
    cwd: projectDir,
    all: true,
    env: { FORCE_COLOR: true.toString() },
  })
  Log.stream(installCommand.all)
  await installCommand
}
