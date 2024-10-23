import { ArrayLiteralExpression, SourceFile, SyntaxKind } from 'ts-morph'
import { Log } from '../tools/index.js'
import { PROVIDERS_PROPERTY } from '../angular/index.js'
import { mergeProvidersWithTemplate } from './merge-providers-with-template.js'

export function mergeAppConfigProvidersFromTemplate({
  template,
  destination,
}: {
  template: SourceFile
  destination: SourceFile
}) {
  const [providers, templateProviders] = [destination, template].map(
    getAppConfigProvidersFromSourceFileOrThrow,
  )
  mergeProvidersWithTemplate({ providers, templateProviders })
}

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

const APP_CONFIG_VARIABLE_NAME = 'appConfig'
