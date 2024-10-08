import { MetadataValues } from './metadata-values'
import { Inject, Injectable } from '@angular/core'
import {
  MetadataRegistry,
  metadataRegistry,
} from '../managers/metadata-registry'
import {
  MetadataResolver,
  metadataResolver,
} from '../resolvers/metadata-resolver'
import { _formatDevMessage } from '../messaging'
import { MODULE_NAME } from '../module-name'

/**
 * Manages the metadata values of the current page.
 *
 * @public
 */
@Injectable({ providedIn: 'root' })
export class NgxMetaService {
  constructor(
    @Inject(metadataRegistry()) private registry: MetadataRegistry,
    @Inject(metadataResolver()) private resolver: MetadataResolver,
  ) {}

  /**
   * Sets the metadata values of the current page
   *
   * @remarks
   *
   * The method is designed as an atomic operation. Subsequent calls to this
   * method won't set more metadata, but will instead set the metadata values
   * provided when calling it.
   *
   * For instance,
   *
   * ```typescript
   * ngxMetaService.set({description: 'Description'})
   * ngxMetaService.set({title: 'Title'})
   * ```
   *
   * Will result in a page with title <b>but no description</b>
   *
   * For more information check the {@link https://ngx-meta.dev/guides/set-metadata-using-service/ | service guide docs}
   *
   * @param values - Metadata values to set, as a JSON object
   */
  set(values: MetadataValues = {}): void {
    const allMetadata = this.registry.getAll()
    for (const metadata of allMetadata) {
      metadata.set(this.resolver(values, metadata.resolverOptions))
    }
  }

  /**
   * Sets a metadata value for the page
   *
   * You can specify which metadata elements will be changed by using the
   * global or JSON Path that you would use if using {@link NgxMetaService.set} API
   *
   * @remarks
   * For instance, if you want to just set the title of the page. You'd set it
   * with {@link NgxMetaService.set} API like this:
   *
   * ```typescript
   * this.ngxMetaService.set({
   *  title: 'Global title'
   *  standard: {
   *    title: 'Standard title',
   *  }
   * })
   * ```
   *
   * But rest of metadata would be removed.
   *
   * To only set the `title`, you can use this API:
   *
   * ```typescript
   * this.ngxMetaService.setOne('title', 'Global title')
   * this.ngxMetaService.setOne('standard.title', 'Standard title')
   * ```
   *
   * For more information check the {@link https://ngx-meta.dev/guides/set-metadata-using-service/ | service guide docs}
   *
   * @param globalOrJsonPath - Looks for metadata managers whose global matches
   *                           this argument. Or whose JSON path matches this
   *                           argument.
   * @param value - Value to set for matching metadata elements
   */
  setOne(globalOrJsonPath: string, value: unknown): void {
    const managers = this.registry.findByGlobalOrJsonPath(globalOrJsonPath)
    /* istanbul ignore next - not unit tested hence no warning test */
    if (ngDevMode && [...managers].length === 0) {
      console.warn(
        _formatDevMessage(
          'no metadata managers found for global or JSON Path',
          {
            module: MODULE_NAME,
            value: globalOrJsonPath,
          },
        ),
      )
    }
    for (const manager of managers) {
      manager.set(value)
    }
  }

  /**
   * Clears all managed metadata elements of the current page
   */
  clear(): void {
    this.set()
  }
}
