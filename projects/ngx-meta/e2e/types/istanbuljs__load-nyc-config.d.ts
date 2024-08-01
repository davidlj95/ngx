declare module '@istanbuljs/load-nyc-config' {
  export function loadNycConfig(): Promise<NycConfig>

  export interface NycConfig {
    cwd: string
    reportDir?: string
    reporter?: ReadonlyArray<string>
    tempDir?: string
  }
}
