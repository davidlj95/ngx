import { makeV16AddRootProvider } from './make-v16-add-root-provider'
import { AddRootProvider } from './index'
import { type addRootProvider } from '@schematics/angular/utility'
import { noop } from '@angular-devkit/schematics'

export const makeAddRootProviderFn = async (): Promise<AddRootProvider> => {
  const ngAddRootProvider = (await import('@schematics/angular/utility'))
    .addRootProvider as typeof addRootProvider | undefined
  /* istanbul ignore next https://github.com/istanbuljs/istanbuljs/issues/719 */
  if (!ngAddRootProvider) {
    // Standalone schematic utils are only available for v16.1 and above.
    // https://github.com/angular/angular-cli/commit/b14b959901d5a670da0df45e082b8fd4c3392d14
    const message =
      'ngx-meta: `ng add` schematics only work for Angular v16.1 and above, sorry :(\n' +
      "          Please, setup the library manually. Don't worry, it's just a few lines around :)\n" +
      '          You can find a guide at: https://ngx-meta.dev/get-started/'
    console.log(message)
    return noop
  }
  return makeV16AddRootProvider(ngAddRootProvider)
}
