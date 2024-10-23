import { AngularCliVersion } from './angular/index.js'

export interface CreateExampleAppOptions {
  readonly angularCliVersion: AngularCliVersion
  readonly baseAppDir?: string
  readonly noCleanup?: boolean
  readonly tmpDir?: string
}
