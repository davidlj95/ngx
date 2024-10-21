import { Tree } from '@angular-devkit/schematics'
import { getFileContent } from '../../testing/get-file-content'

export const getAppConfigOrAppModuleContent = (
  tree: Tree,
  standalone: boolean,
) =>
  standalone
    ? getFileContent(tree, '/src/app/app.config.ts')
    : getFileContent(tree, '/src/app/app.module.ts')
