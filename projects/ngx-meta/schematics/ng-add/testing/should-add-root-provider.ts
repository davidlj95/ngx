import { ProviderTestCase } from './provider-test-case'
import { Tree } from '@angular-devkit/schematics'
import { expect, it } from '@jest/globals'
import { getAppConfigOrAppModuleContent } from './get-app-config-or-app-module-content'
import { LIB_NAME } from '../../testing/lib-name'
import { stripWhitespace } from '../../testing/strip-whitespace'
import { regexpEscape } from '../../testing/regexp-escape'

export const shouldAddRootProvider = (
  providerTestCase: ProviderTestCase,
  treeFactory: () => Tree,
  standalone: boolean,
) => {
  it(`should add ${providerTestCase.name} provider`, () => {
    const appConfigOrAppModuleContents = getAppConfigOrAppModuleContent(
      treeFactory(),
      standalone,
    )
    expect(appConfigOrAppModuleContents).toContain(
      `import { ${providerTestCase.symbol} } from '${LIB_NAME}/${providerTestCase.entrypoint}'`,
    )
    expect(stripWhitespace(appConfigOrAppModuleContents)).toMatch(
      new RegExp(`providers:\\[.*${regexpEscape(providerTestCase.code)}.*]`),
    )
  })
}
