import { DirEntry, Tree } from '@angular-devkit/schematics'
import { createSourceFile, ScriptTarget, SourceFile } from 'typescript'

// https://github.com/ngxtension/ngxtension-platform/blob/4.0.0/libs/plugin/src/migrations/rename-computeds/rename-computeds.ts
// https://github.com/nrwl/nx/blob/20.0.6/packages/devkit/src/generators/visit-not-ignored-files.ts
// https://github.com/ngrx/platform/blob/18.1.1/modules/store/schematics-core/utility/visitors.ts
export function* getAllTypescriptFiles(
  tree: Tree,
  options: GetAllTypescriptFilesOptions = {},
): IterableIterator<[string, SourceFile]> {
  for (const filePath of getAllTypescriptFilePaths(tree.root)) {
    const content = tree.readText(filePath)
    if (options.contentFilter && !options.contentFilter(content)) {
      continue
    }
    const sourceFile = createSourceFile(
      filePath,
      tree.readText(filePath),
      ScriptTarget.Latest,
      true,
    )
    yield [filePath, sourceFile]
  }
}
export type GetAllTypescriptFilesOptions = Partial<{
  contentFilter: (content: string) => boolean
}>

const TYPESCRIPT_FILE_EXTENSIONS = ['.mts', '.ts']
const TYPESCRIPT_DEFINITION_FILE_EXTENSION_PREFIX = '.d'

function* getAllTypescriptFilePaths(dir: DirEntry): IterableIterator<string> {
  for (const path of dir.subfiles) {
    if (
      TYPESCRIPT_FILE_EXTENSIONS.some(
        (typescriptFileExtension) =>
          path.endsWith(typescriptFileExtension) &&
          !path.endsWith(
            `${TYPESCRIPT_DEFINITION_FILE_EXTENSION_PREFIX}${typescriptFileExtension}`,
          ),
      )
    ) {
      yield dir.file(path)!.path
    }
  }
  for (const path of dir.subdirs) {
    if (path === 'node_modules') {
      continue
    }
    yield* getAllTypescriptFilePaths(dir.dir(path))
  }
}
