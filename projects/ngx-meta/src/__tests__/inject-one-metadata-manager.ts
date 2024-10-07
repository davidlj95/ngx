/**
 * Injects the only metadata manager found.
 *
 * Throws if no one is found or more than one is found.
 */
import {
  _injectMetadataManagers,
  NgxMetaMetadataManager,
} from '@davidlj95/ngx-meta/core'
import { TestBed } from '@angular/core/testing'

export const injectOneMetadataManager = <T>(): NgxMetaMetadataManager<T> => {
  const managers = TestBed.runInInjectionContext(_injectMetadataManagers)
  if (managers.length > 1) {
    throw new Error(
      `More than one metadata manager found (${managers.length}). Just one is expected`,
    )
  }
  if (managers.length === 0) {
    throw new Error(`No metadata manager found. One is expected`)
  }
  return managers[0]
}
