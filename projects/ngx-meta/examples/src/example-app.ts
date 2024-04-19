import { AngularCliVersion } from './angular-cli-versions.js'

export class ExampleApp {
  readonly cliVersion: AngularCliVersion
  readonly cliNewArguments: ReadonlyArray<string>
  readonly standalone: boolean
  readonly name: string

  constructor({
    cliVersion,
    cliNewArguments,
    standalone,
  }: {
    cliVersion: AngularCliVersion
    cliNewArguments?: ReadonlyArray<string>
    standalone: boolean
  }) {
    this.cliVersion = cliVersion
    this.cliNewArguments = cliNewArguments ?? []
    this.standalone = standalone
    //👇 Right now name + CLI version alias MUST match
    //   See example apps workflow cache info step for more info
    this.name = cliVersion.alias
  }
}

export const EXAMPLE_APPS = [
  new ExampleApp({
    cliVersion: new AngularCliVersion('v17'),
    cliNewArguments: [
      '--standalone=true', // Default in v17, but to be explicit
    ],
    standalone: true,
  }),
  new ExampleApp({
    cliVersion: new AngularCliVersion('v16'),
    cliNewArguments: [
      '--standalone=false', // Default in v16, but to be explicit
    ],
    standalone: false,
  }),
  new ExampleApp({
    cliVersion: new AngularCliVersion('v15'),
    standalone: false, // No standalone CLI argument in v15
  }),
] satisfies ReadonlyArray<ExampleApp>
