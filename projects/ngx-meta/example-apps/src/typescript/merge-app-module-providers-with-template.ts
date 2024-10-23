import { ArrayLiteralExpression, SourceFile, SyntaxKind } from 'ts-morph'
import { Log } from '../tools/index.js'
import { PROVIDERS_PROPERTY } from '../angular/index.js'
import { mergeProvidersWithTemplate } from './merge-providers-with-template.js'

export function mergeAppModuleProvidersWithTemplate({
  template,
  destination,
}: {
  template: SourceFile
  destination: SourceFile
}) {
  const [providers, templateProviders] = [destination, template].map(
    getAppModuleProvidersFromSourceFileOrThrow,
  )
  mergeProvidersWithTemplate({ providers, templateProviders })
}

const getAppModuleProvidersFromSourceFileOrThrow = (
  sourceFile: SourceFile,
): ArrayLiteralExpression => {
  const ngModuleDecorator = sourceFile
    .getClassOrThrow(APP_MODULE_CLASS_NAME)
    .getDecoratorOrThrow(APP_MODULE_DECORATOR_NAME)
  const decoratorArguments = ngModuleDecorator.getArguments()
  if (decoratorArguments.length < 1) {
    throw new Error('NgModule decorator without arguments found')
  }
  if (decoratorArguments.length > 1) {
    Log.warn('NgModule decorator found with more than 1 argument')
  }
  const decoratorObject = ngModuleDecorator
    .getArguments()[0]
    .asKindOrThrow(SyntaxKind.ObjectLiteralExpression)

  return decoratorObject
    .getPropertyOrThrow(PROVIDERS_PROPERTY)
    .asKindOrThrow(SyntaxKind.PropertyAssignment)
    .getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression)
}

const APP_MODULE_CLASS_NAME = 'AppModule'
const APP_MODULE_DECORATOR_NAME = 'NgModule'
