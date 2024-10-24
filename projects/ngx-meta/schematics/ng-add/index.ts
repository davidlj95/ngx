import { chain, noop, Rule, SchematicContext } from '@angular-devkit/schematics'
import { Schema } from './schema'
import { makeAddRootProviderFn } from './add-root-provider'

// noinspection JSUnusedGlobalSymbols (actually used in `collection.json`)
export function ngAdd(options: Schema): Rule {
  return async (_tree, context) => {
    const addRootProvider = await makeAddRootProviderFn()
    if (!addRootProvider) {
      // Standalone schematic utils are only available for v16.1 and above.
      // https://github.com/angular/angular-cli/commit/b14b959901d5a670da0df45e082b8fd4c3392d14
      context.logger.warn(
        [
          'ngx-meta `ng add` schematics only work for Angular v16.1 and above, sorry :(',
          "Please, setup the library manually. Don't worry, it's just a few lines around :)",
          'You can find a guide at: https://ngx-meta.dev/guides/manual-setup/',
        ].join('\n'),
      )
      logLibraryInfo(context.logger)
      return
    }

    const addRootProviderToProject = (name: string) =>
      addRootProvider({ name, project: options.project })

    return chain([
      addRootProviderToProject('core'),
      options.routing ? addRootProviderToProject('routing') : noop(),
      ...options.metadataModules.map((metadataModule) =>
        addRootProviderToProject(metadataModule),
      ),
      () => {
        context.logger.info('ngx-meta library was successfully set up 🚀')
        logLibraryInfo(context.logger)
      },
    ])
  }
}

const logLibraryInfo = (logger: SchematicContext['logger']) =>
  logger.info(
    [
      'For more information, you can check out:',
      ' - Documentation: https://ngx-meta.dev',
      ' - Repository:    https://github.com/davidlj95/ngx',
      ' - NPM:           https://www.npmjs.com/package/@davidlj95/ngx-meta',
      'If you enjoyed using the library, please star its GitHub repository! ⭐️❤️',
    ].join('\n'),
  )
