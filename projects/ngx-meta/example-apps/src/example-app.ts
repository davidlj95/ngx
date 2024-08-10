import { AngularCliVersion } from './angular-cli-versions.js'

export class ExampleApp {
  readonly cliVersion: AngularCliVersion
  readonly name: string

  constructor({ cliVersion }: { cliVersion: AngularCliVersion }) {
    this.cliVersion = cliVersion
    //👇 Right now name + CLI version alias MUST match
    //   See example apps workflow cache info step for more info
    this.name = cliVersion.alias
  }
}

export const EXAMPLE_APPS = [
  new ExampleApp({
    cliVersion: new AngularCliVersion('v18'),
  }),
  new ExampleApp({
    cliVersion: new AngularCliVersion('v17'),
  }),
  new ExampleApp({
    cliVersion: new AngularCliVersion('v16'),
  }),
  new ExampleApp({
    cliVersion: new AngularCliVersion('v15'),
  }),
] satisfies ReadonlyArray<ExampleApp>
