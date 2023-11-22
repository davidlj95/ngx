import { Injectable, OnDestroy, Optional } from '@angular/core'
import { Subscription } from 'rxjs'
import {
  _GeneralMetadataAppliersService,
  GeneralMetadata,
} from 'ngx-metadata/general-metadata'
import { OpenGraphAppliersService } from './open-graph-appliers.service'

@Injectable()
export class OpenGraphGeneralMetadataListenerService implements OnDestroy {
  private subscription?: Subscription

  constructor(
    @Optional()
    private readonly generalMetadataAppliersService: _GeneralMetadataAppliersService | null,
    private readonly appliers: OpenGraphAppliersService,
  ) {}

  public listen() {
    if (!this.generalMetadataAppliersService) {
      return
    }

    if (this.subscription !== undefined) {
      throw new Error('Already listening to general metadata changes')
    }

    this.subscription = this.generalMetadataAppliersService.changes$.subscribe({
      next: (generalMetadata: GeneralMetadata) => {
        if ('title' in generalMetadata) {
          this.appliers.title(generalMetadata.title)
        }
        if ('description' in generalMetadata) {
          this.appliers.description(generalMetadata.description)
        }
        if ('image' in generalMetadata) {
          this.appliers.image(generalMetadata.image)
        }
        if ('canonicalUrl' in generalMetadata) {
          this.appliers.url(generalMetadata.canonicalUrl)
        }
        if ('locale' in generalMetadata) {
          this.appliers.locale(generalMetadata.locale)
        }
        if ('applicationName' in generalMetadata) {
          this.appliers.siteName(generalMetadata.applicationName)
        }
      },
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
