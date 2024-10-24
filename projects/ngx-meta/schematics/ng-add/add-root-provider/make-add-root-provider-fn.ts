import { makeV16AddRootProvider } from './make-v16-add-root-provider'
import { AddRootProvider } from './index'
import { type addRootProvider } from '@schematics/angular/utility'

export const makeAddRootProviderFn = async (): Promise<
  AddRootProvider | undefined
> => {
  const ngAddRootProvider = (await import('@schematics/angular/utility'))
    .addRootProvider as typeof addRootProvider | undefined
  if (!ngAddRootProvider) {
    return
  }
  return makeV16AddRootProvider(ngAddRootProvider)
}
