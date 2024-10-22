import {
  ArrayLiteralExpression,
  CallExpression,
  SourceFile,
  SyntaxKind,
} from 'ts-morph'
import { Log } from './utils.js'
import { PROVIDERS_PROPERTY } from './constants.js'

export function addAppConfigProvidersFromTemplateIntoSourceFile({
  template,
  destination,
}: {
  template: SourceFile
  destination: SourceFile
}) {
  const [templateProviders, destinationProviders] = [template, destination].map(
    getAppConfigProvidersFromSourceFileOrThrow,
  )
  removeProvidersSpecifiedInTemplate({
    templateProviders,
    destinationProviders,
  })
  addProvidersFromTemplate({ templateProviders, destinationProviders })
}

const APP_CONFIG_VARIABLE_NAME = 'appConfig'

function getAppConfigProvidersFromSourceFileOrThrow(
  sourceFile: SourceFile,
): ArrayLiteralExpression {
  const variableStatement = sourceFile.getVariableStatementOrThrow(
    APP_CONFIG_VARIABLE_NAME,
  )
  const variableDeclarations = variableStatement.getDeclarations()
  if (variableDeclarations.length < 1) {
    throw new Error('App config variable statement contains no declarations')
  }
  if (variableDeclarations.length > 1) {
    Log.warn(
      'More than one declaration found for app config variable statement',
    )
  }
  const variableDeclaration = variableDeclarations[0]
  const objectLiteralExpression =
    variableDeclaration.getInitializerIfKindOrThrow(
      SyntaxKind.ObjectLiteralExpression,
    )
  const providersProperty = objectLiteralExpression
    .getPropertyOrThrow(PROVIDERS_PROPERTY)
    .asKindOrThrow(SyntaxKind.PropertyAssignment)
  return providersProperty.getInitializerIfKindOrThrow(
    SyntaxKind.ArrayLiteralExpression,
  )
}

function removeProvidersSpecifiedInTemplate({
  templateProviders,
  destinationProviders,
}: {
  templateProviders: ArrayLiteralExpression
  destinationProviders: ArrayLiteralExpression
}) {
  const destinationCallExpressions =
    destinationProviders.getElements() as CallExpression[]
  const templateCallExpressionsExpressionsAsTexts = (
    templateProviders.getElements() as CallExpression[]
  ).map((callExpression) => callExpression.getExpression().getText())
  destinationCallExpressions.forEach((destinationCallExpression) => {
    if (
      templateCallExpressionsExpressionsAsTexts.includes(
        destinationCallExpression.getExpression().getText(),
      )
    ) {
      destinationProviders.removeElement(destinationCallExpression)
    }
  })
}

function addProvidersFromTemplate({
  templateProviders,
  destinationProviders,
}: {
  templateProviders: ArrayLiteralExpression
  destinationProviders: ArrayLiteralExpression
}) {
  destinationProviders.addElements(
    templateProviders.getElements().map((p) => p.getText()),
  )
}
