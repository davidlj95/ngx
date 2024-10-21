import { ProviderTestCase } from './provider-test-case'
import { Tree } from '@angular-devkit/schematics'
import { expect, it } from '@jest/globals'
import { getAppConfigOrAppModuleContent } from './get-app-config-or-app-module-content'

export const shouldNotAddRootProvider = (
  providerTestCase: ProviderTestCase,
  treeFactory: () => Tree,
  standalone: boolean,
) => {
  it(`should not add ${providerTestCase.name} provider`, () => {
    const appConfigOrAppModuleContents = getAppConfigOrAppModuleContent(
      treeFactory(),
      standalone,
    )
    expect(appConfigOrAppModuleContents).not.toContain(providerTestCase.symbol)
  })
}
