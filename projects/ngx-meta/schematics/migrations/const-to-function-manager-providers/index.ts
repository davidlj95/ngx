import { Rule } from '@angular-devkit/schematics'
import { updateImports } from './update-imports'
import { updateUsages } from './update-usages'
import { applyChanges } from '../../utils/apply-changes'
import { getAllTypescriptFiles } from '../../utils/get-all-typescript-files'
import { OLD_IDENTIFIER_SUFFIX } from './maybe-get-new-identifier-from-old-identifier'

// Sources visited to create this function (and `migrateFile` one):
// https://github.com/angular/angular/blob/19.0.0-next.11/packages/core/schematics/migrations/provide-initializer/index.ts
// https://github.com/angular/angular/blob/19.0.0-next.11/packages/core/schematics/migrations/explicit-standalone-flag/index.ts
// https://github.com/angular/components/blob/19.0.0-next.10/src/google-maps/schematics/ng-update/index.ts
// https://github.com/ngrx/platform/blob/main/modules/store/migrations/18_0_0-beta/index.ts#L20
// https://github.com/ngxtension/ngxtension-platform/blob/4.0.0/libs/plugin/src/migrations/rename-computeds/rename-computeds.ts
// Eventually, generated most of it with ChatGPT though :P
// However, investigated first how folks are doing it around first to see what's the current way to do it
// noinspection JSUnusedGlobalSymbols
export function migrate(): Rule {
  return (tree, context) => {
    const typescriptFiles = getAllTypescriptFiles(tree, {
      contentFilter: (content) => content.includes(OLD_IDENTIFIER_SUFFIX),
    })
    for (const [filePath, sourceFile] of typescriptFiles) {
      applyChanges(tree, filePath, [
        ...updateImports(sourceFile, filePath, context.logger),
        ...updateUsages(sourceFile, filePath),
      ])
    }
  }
}
