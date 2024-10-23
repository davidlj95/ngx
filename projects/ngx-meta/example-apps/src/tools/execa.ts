import { execa as unwrappedExeca, Options } from 'execa'
import { Log } from './index.js'

export const execa = (
  file: string,
  args: ReadonlyArray<string>,
  options: Options,
) => {
  const process = unwrappedExeca(file, args, {
    all: true,
    env: { FORCE_COLOR: true.toString() },
    ...options,
  })
  Log.stream(process.all)
  return process
}
