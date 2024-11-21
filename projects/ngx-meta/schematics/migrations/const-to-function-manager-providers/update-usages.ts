import {
  forEachChild,
  isIdentifier,
  isImportDeclaration,
  Node,
  SourceFile,
} from 'typescript'
import {
  Change,
  ReplaceChange,
} from '../../external-utils/schematics/angular/utility/change'
import { maybeGetNewIdentifierFromOldIdentifier } from './maybe-get-new-identifier-from-old-identifier'

export const updateUsages = (
  sourceFile: SourceFile,
  filePath: string,
): Change[] => {
  const changes: Change[] = []

  const visitNode = (node: Node) => {
    forEachChild(node, visitNode)
    const change = maybeGetIdentifierReplaceChange(node, filePath)
    if (change) {
      changes.push(change)
    }
  }

  sourceFile.statements.forEach((statement) => {
    if (isImportDeclaration(statement)) {
      return
    }
    forEachChild(statement, visitNode)
  })

  return changes
}

const maybeGetIdentifierReplaceChange = (
  node: Node,
  filePath: string,
): Change | undefined => {
  if (!isIdentifier(node)) {
    return
  }
  const identifier = node.text
  const maybeNewIdentifier = maybeGetNewIdentifierFromOldIdentifier(identifier)
  if (!maybeNewIdentifier) {
    return
  }
  return new ReplaceChange(
    filePath,
    node.getStart(),
    identifier,
    `${maybeGetNewIdentifierFromOldIdentifier(identifier)}()`,
  )
}
