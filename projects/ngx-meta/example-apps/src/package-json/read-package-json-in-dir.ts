import { readFile } from 'fs/promises'
import { join } from 'path'
import { PACKAGE_JSON } from './package-json.js'
import { PackageJson } from './index.js'

export const readPackageJsonInDir = async (dir: string): Promise<PackageJson> =>
  JSON.parse(await readFile(join(dir, PACKAGE_JSON), 'utf8'))
