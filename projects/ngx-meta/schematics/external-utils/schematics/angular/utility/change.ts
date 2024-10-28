// Partial extraction from
// https://github.com/angular/angular-cli/blob/18.2.10/packages/schematics/angular/utility/change.ts
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

import { UpdateRecorder } from '@angular-devkit/schematics'

export interface Change {
  // The file this change should be applied to. Some changes might not apply to
  // a file (maybe the config).
  readonly path: string | null

  // The order this change should be applied. Normally the position inside the file.
  // Changes are applied from the bottom of a file to the top.
  readonly order: number

  // The description of this change. This will be outputted in a dry or verbose run.
  readonly description: string
}

/**
 * An operation that does nothing.
 */
export class NoopChange implements Change {
  description = 'No operation.'
  order = Infinity
  path = null
}

/**
 * Will add text to the source code.
 */
export class InsertChange implements Change {
  order: number
  description: string

  constructor(
    public path: string,
    public pos: number,
    public toAdd: string,
  ) {
    if (pos < 0) {
      throw new Error('Negative positions are invalid')
    }
    this.description = `Inserted ${toAdd} into position ${pos} of ${path}`
    this.order = pos
  }
}

/**
 * Will remove text from the source code.
 */
export class RemoveChange implements Change {
  order: number
  description: string

  constructor(
    public path: string,
    pos: number,
    public toRemove: string,
  ) {
    if (pos < 0) {
      throw new Error('Negative positions are invalid')
    }
    this.description = `Removed ${toRemove} into position ${pos} of ${path}`
    this.order = pos
  }
}

/**
 * Will replace text from the source code.
 */
export class ReplaceChange implements Change {
  order: number
  description: string

  constructor(
    public path: string,
    pos: number,
    public oldText: string,
    public newText: string,
  ) {
    if (pos < 0) {
      throw new Error('Negative positions are invalid')
    }
    this.description = `Replaced ${oldText} into position ${pos} of ${path} with ${newText}`
    this.order = pos
  }
}

export function applyToUpdateRecorder(
  recorder: UpdateRecorder,
  changes: Change[],
): void {
  for (const change of changes) {
    if (change instanceof InsertChange) {
      recorder.insertLeft(change.pos, change.toAdd)
    } else if (change instanceof RemoveChange) {
      recorder.remove(change.order, change.toRemove.length)
    } else if (change instanceof ReplaceChange) {
      recorder.remove(change.order, change.oldText.length)
      recorder.insertLeft(change.order, change.newText)
    } else if (!(change instanceof NoopChange)) {
      throw new Error(
        'Unknown Change type encountered when updating a recorder.',
      )
    }
  }
}
