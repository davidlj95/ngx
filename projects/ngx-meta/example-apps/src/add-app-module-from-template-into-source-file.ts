import {
  ArrayLiteralExpression,
  Decorator,
  Expression,
  SourceFile,
  SyntaxKind,
} from 'ts-morph'
import { Log } from './utils.js'
import { PROVIDERS_PROPERTY } from './constants.js'

/**
 * Completes an existing `AppModule` from a {@link destination} source file
 * using an `AppModule` from a {@link template} source file
 *
 * Only completes array literal expressions for an `NgModule`:
 *  - declarations
 *  - imports
 *  - providers
 *  - bootstrap
 */
export function addAppModuleFromTemplateIntoSourceFile({
  template,
  destination,
}: {
  template: SourceFile
  destination: SourceFile
}) {
  const [destinationAppModuleDecorator, templateAppModuleDecorator] = [
    destination,
    template,
  ].map((sourceFile) =>
    sourceFile
      .getClassOrThrow(APP_MODULE_CLASS_NAME)
      .getDecoratorOrThrow(APP_MODULE_DECORATOR_NAME),
  )

  const decoratorPropertiesToMerge = [
    'declarations',
    'imports',
    PROVIDERS_PROPERTY,
    'bootstrap',
  ]
  decoratorPropertiesToMerge.forEach((property) =>
    addToNgModuleDecoratorArrayPropertyFromTemplate({
      template: templateAppModuleDecorator,
      destination: destinationAppModuleDecorator,
      property,
    }),
  )
}

const APP_MODULE_CLASS_NAME = 'AppModule'
const APP_MODULE_DECORATOR_NAME = 'NgModule'

function addToNgModuleDecoratorArrayPropertyFromTemplate({
  template,
  destination,
  property,
}: {
  template: Decorator
  destination: Decorator
  property: string
}) {
  const [destinationPropertyArray, templatePropertyArray] = [
    destination,
    template,
  ].map((d) => getNgModuleDecoratorArrayPropertyOrExit(d, property))
  if (!templatePropertyArray) {
    return
  }
  if (!destinationPropertyArray) {
    return templatePropertyArray
  }
  const elementsToAdd = templatePropertyArray
    .getElements()
    .reduce<
      ReadonlyArray<Expression>
    >((accumulator, templatePropertyExpression) => {
      // Avoid duplicates
      if (
        destinationPropertyArray
          .getElements()
          .some((destinationPropertyExpression) => {
            const sameExpression =
              destinationPropertyExpression.getText() ===
              templatePropertyExpression.getText()
            //👇 In Angular v15, BrowserModule with SSR is BrowserModule.withServerTransition
            //   So template BrowserModule should not be added in favour of that one
            const sameExpressionButWithPropertyAccess =
              destinationPropertyExpression
                .getText()
                .startsWith(`${templatePropertyExpression.getText()}.`)
            return sameExpression || sameExpressionButWithPropertyAccess
          })
      ) {
        return accumulator
      }
      // Or add it
      return [...accumulator, templatePropertyExpression]
    }, [])
  destinationPropertyArray.addElements(elementsToAdd.map((e) => e.getText()))
}

function getNgModuleDecoratorArrayPropertyOrExit(
  decorator: Decorator,
  property: string,
): ArrayLiteralExpression | undefined {
  const decoratorArguments = decorator.getArguments()
  if (decoratorArguments.length < 1) {
    throw new Error('NgModule decorator without arguments found')
  }
  if (decoratorArguments.length > 1) {
    Log.warn('NgModule decorator found with more than 1 argument')
  }
  const decoratorObject = decorator
    .getArguments()[0]
    .asKindOrThrow(SyntaxKind.ObjectLiteralExpression)
  const propertyAssignment = decoratorObject.getProperty(property)
  if (!propertyAssignment) {
    return undefined
  }
  return propertyAssignment
    .asKindOrThrow(SyntaxKind.PropertyAssignment)
    .getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression)
}
