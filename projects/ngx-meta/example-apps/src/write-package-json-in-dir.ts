import { writeFile } from 'fs/promises'
import { join } from 'path'
import { jsonToString } from './utils.js'
import { PACKAGE_JSON } from './package-json.js'

export const writePackageJsonInDir = async (
  dir: string,
  packageJson: object,
): Promise<void> =>
  writeFile(join(dir, PACKAGE_JSON), jsonToString(packageJson))
