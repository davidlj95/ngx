import { Inject, Injectable } from '@angular/core'
import { MetadataValues } from './metadata-values'
import { MetadataRegistry } from './metadata-registry'
import { METADATA_RESOLVER, MetadataResolver } from './metadata-resolver'

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
   * Clears all managed metadata elements of the current page
   */
  public clear(): void {
    this.set()
  }
}
