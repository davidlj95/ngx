import { ArrayLiteralExpression, CallExpression } from 'ts-morph'

/**
 * Merges some providers with providers coming from a template.
 *
 * If same provider symbol (i.e: `provideRouting`) is found in both the template and given providers,
 * template providers will take preference.
 *
 * This is in order to make `provideNgxMetaCore(...)` from the template
 * overwrite the `provideNgxMetaCore()` (no args) added by the `ng-add` schematic.
 */
export const mergeProvidersWithTemplate = (opts: {
  providers: ArrayLiteralExpression
  templateProviders: ArrayLiteralExpression
}) => {
  removeProvidersSpecifiedInTemplate(opts)
  addProvidersFromTemplate(opts)
}

function removeProvidersSpecifiedInTemplate({
  templateProviders,
  providers,
}: {
  templateProviders: ArrayLiteralExpression
  providers: ArrayLiteralExpression
}) {
  const destinationCallExpressions = providers.getElements() as CallExpression[]
  const templateCallExpressionsExpressionsAsTexts = (
    templateProviders.getElements() as CallExpression[]
  ).map((callExpression) => callExpression.getExpression().getText())
  destinationCallExpressions.forEach((destinationCallExpression) => {
    if (
      templateCallExpressionsExpressionsAsTexts.includes(
        destinationCallExpression.getExpression().getText(),
      )
    ) {
      providers.removeElement(destinationCallExpression)
    }
  })
}

function addProvidersFromTemplate({
  templateProviders,
  providers,
}: {
  templateProviders: ArrayLiteralExpression
  providers: ArrayLiteralExpression
}) {
  providers.addElements(templateProviders.getElements().map((p) => p.getText()))
}
