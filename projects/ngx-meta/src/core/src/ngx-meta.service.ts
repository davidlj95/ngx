import { Inject, Injectable } from '@angular/core'
import { MetadataValues } from './metadata-values'
import { MetadataRegistry } from './metadata-registry'
import { METADATA_RESOLVER, MetadataResolver } from './metadata-resolver'
import { _formatDevMessage } from './format-dev-message'
import { _MODULE_NAME } from './module-name'

/**
 * Manages the metadata values of the current page
 *
 * @public
 */
@Injectable({ providedIn: 'root' })
export class NgxMetaService {
  constructor(
    private readonly registry: MetadataRegistry,
    @Inject(METADATA_RESOLVER) private readonly resolver: MetadataResolver,
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
  public set(values: MetadataValues = {}): void {
    const allMetadata = this.registry.getAll()
    for (const metadata of allMetadata) {
      metadata.set(this.resolver(values, metadata.resolverOptions))
    }
  }

  /**
   * Sets a metadata value for the page
   *
   * You can specify which metadata elements will be changed by using the
   * JSON Path that you would use if using {@link NgxMetaService.set} API
   *
   * @remarks
   * For instance, if you want to just set the title of the page. You'd set it
   * with {@link NgxMetaService.set} API like this:
   *
   * ```typescript
   * this.ngxMetaService.set({
   *  title: 'foo'
   * })
   * ```
   *
   * But rest of metadata would be removed
   *
   * To only set the `title`, you can use this API:
   * ```typescript
   * this.ngxMetaService.setOne('title', 'foo')
   * ```
   *
   * For more information check the {@link https://ngx-meta.dev/guides/set-metadata-using-service/ | service guide docs}
   *
   * @param globalOrJsonPath - Looks for metadata managers whose global matches
   *                           this argument. Or whose JSON path matches this
   *                           argument.
   * @param value - Value to set for matching metadata elements
   */
  public setOne(globalOrJsonPath: string, value: unknown): void {
    const managers = this.registry.findByGlobalOrJsonPath(globalOrJsonPath)
    /* istanbul ignore if */
    if (ngDevMode && [...managers].length === 0) {
      console.warn(
        _formatDevMessage(
          'no metadata managers found for global or JSON Path',
          { module: _MODULE_NAME, value: globalOrJsonPath },
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
  public clear(): void {
    this.set()
  }
}
