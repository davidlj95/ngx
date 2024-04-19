import { Expression, SourceFile, SyntaxKind } from 'ts-morph'
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
  const destinationProviderExpressionsAsTexts = destinationProviders
    .getElements()
    .map((expression) => expression.getText())
  const providersToAdd = templateProviders
    .getElements()
    .reduce<ReadonlyArray<Expression>>((accumulator, templateExpression) => {
      // Skip if exists
      if (
        destinationProviderExpressionsAsTexts.includes(
          templateExpression.getText(),
        )
      ) {
        return accumulator
      }
      // Add from template
      return [...accumulator, templateExpression]
    }, [])
  destinationProviders.addElements(providersToAdd.map((p) => p.getText()))
}

const APP_CONFIG_VARIABLE_NAME = 'appConfig'

function getAppConfigProvidersFromSourceFileOrThrow(sourceFile: SourceFile) {
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
