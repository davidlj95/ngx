import { Project, SourceFile, SyntaxKind } from 'ts-morph'
import { Log } from '../tools/index.js'
import { join } from 'path'

export async function updateMainToUseTypedAppComponent(
  tsMorphProject: Project,
  appDir: string,
) {
  Log.step('Updating main to use typed AppComponent')
  const [main, mainServer] = [
    join(appDir, 'src', 'main.ts'),
    join(appDir, 'src', 'main.server.ts'),
  ].map((path) => tsMorphProject.addSourceFileAtPath(path))

  await Promise.all([main, mainServer].map(updateAppImport))
  await Promise.all([main, mainServer].map(updateBootstrapCall))
  await Promise.all([main, mainServer].map((s) => s.save()))
}

const updateAppImport = async (main: SourceFile) => {
  const appImportDeclaration = main.getImportDeclaration(
    (declaration) => declaration.getModuleSpecifierValue() == './app/app',
  )
  if (appImportDeclaration) {
    appImportDeclaration
      .setModuleSpecifier('./app/app.component')
      .getNamedImports()[0]
      .setName('AppComponent')
  }
}

const updateBootstrapCall = async (main: SourceFile) => {
  const callExpressions = main.getDescendantsOfKind(SyntaxKind.CallExpression)
  const bootstrapAppCall = callExpressions.find(
    (callExpression) =>
      callExpression.getExpression().getText() === 'bootstrapApplication',
  )
  if (!bootstrapAppCall) {
    throw new Error('Could not find bootstrapApplication call to patch')
  }
  bootstrapAppCall.getArguments()[0].replaceWithText('AppComponent')
}
