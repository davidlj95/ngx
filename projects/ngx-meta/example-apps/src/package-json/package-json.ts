export interface PackageJson {
  name: string
  scripts: Record<string, string>
  dependencies: Record<string, string>
  devDependencies: Record<string, string>
}
export const PACKAGE_JSON = 'package.json'
