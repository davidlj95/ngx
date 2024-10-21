import { Tree } from '@angular-devkit/schematics'

// https://github.com/angular/components/blob/18.2.8/src/cdk/schematics/testing/file-content.ts
export const getFileContent = (tree: Tree, filePath: string): string => {
  const contentBuffer = tree.read(filePath)

  if (!contentBuffer) {
    throw new Error(`Cannot read "${filePath}" because it does not exist.`)
  }

  return contentBuffer.toString()
}
