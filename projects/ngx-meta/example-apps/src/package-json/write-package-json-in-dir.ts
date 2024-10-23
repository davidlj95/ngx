import { writeFile } from 'fs/promises'
import { join } from 'path'
import { PACKAGE_JSON } from './package-json.js'
import { jsonToString } from '../utils/index.js'

export const writePackageJsonInDir = async (
  dir: string,
  packageJson: object,
): Promise<void> =>
  writeFile(join(dir, PACKAGE_JSON), jsonToString(packageJson))
