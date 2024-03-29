import { Injectable } from '@angular/core'
import { MetadataValues } from './metadata-values'
import { Router } from '@angular/router'

/**
 * @internal
 */
@Injectable()
export class _NgxMetaRouteValuesService {
  private url?: string
  private values: MetadataValues = {}

  constructor(private readonly router: Router) {}

  get(): MetadataValues {
    if (this.router.url != this.url) {
      return {}
    }
    return this.values
  }

  set(values: MetadataValues | undefined) {
    if (values === undefined) {
      return
    }
    this.url = this.router.url
    this.values = values
  }
}
