import { Inject, Injectable, Optional } from '@angular/core'
import { NgxMetaMetadataManager } from './ngx-meta-metadata-manager'

/**
 * @internal
 */
@Injectable()
export class MetadataRegistry {
  private readonly byId = new Map<string, NgxMetaMetadataManager>()

  constructor(
    @Optional()
    @Inject(NgxMetaMetadataManager)
    managers: ReadonlyArray<NgxMetaMetadataManager> | null,
  ) {
    managers?.forEach((manager) => this.register(manager))
  }

  register(manager: NgxMetaMetadataManager) {
    if (this.byId.has(manager.id)) {
      return
    }
    this.byId.set(manager.id, manager)
  }

  getAll(): Iterable<NgxMetaMetadataManager> {
    return this.byId.values()
  }

  findByGlobalOrJsonPath(
    globalOrJsonPath: string,
  ): Iterable<NgxMetaMetadataManager> {
    return [...this.getAll()].filter(
      (manager) =>
        manager.resolverOptions.global == globalOrJsonPath ||
        manager.resolverOptions.jsonPath.join('.') == globalOrJsonPath,
    )
  }
}
