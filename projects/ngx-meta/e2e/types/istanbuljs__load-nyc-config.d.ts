declare module '@istanbuljs/load-nyc-config' {
  // https://github.com/istanbuljs/load-nyc-config
  export function loadNycConfig(): Promise<NycConfig>

  // https://github.com/istanbuljs/nyc/tree/main#common-configuration-options
  // https://github.com/istanbuljs/load-nyc-config/blob/v1.1.0/index.js#L100
  export interface NycConfig {
    cwd: string
    reportDir?: string
    reporter?: readonly string[]
    tempDir?: string
  }
}
