import { Tree } from '@angular-devkit/schematics'
import {
  applyToUpdateRecorder,
  Change,
} from '../external-utils/schematics/angular/utility/change'

export const applyChanges = (tree: Tree, path: string, changes: Change[]) => {
  const updateRecorder = tree.beginUpdate(path)
  applyToUpdateRecorder(
    updateRecorder,
    sortChangesByDescendingPosition(changes),
  )
  tree.commitUpdate(updateRecorder)
}

/**
 * Sorts changes to apply to a file by position in the file in descending order.
 * So changes are applied from end to start of the file.
 *
 * This is important, as if applying changes in any order, it can happen that changes are messed up.
 * For instance, if removing some characters first, and then applying a replacement later.
 * If later replacement doesn't take into account that position has been updated due to the delete,
 * Then the actual replacement performed won't be the expected one.
 *
 * See:
 *
 *  - https://github.com/angular/angular/blob/18.2.9/packages/core/schematics/utils/change_tracker.ts#L187-L189
 */
const sortChangesByDescendingPosition = (changes: Change[]): Change[] =>
  changes.sort((a, b) => a.order - b.order)
