import { Injectable, OnDestroy, Optional } from '@angular/core'
import { Subscription } from 'rxjs'
import { GeneralMetadataAppliersService } from '../general-metadata/general-metadata-appliers.service'
import { GeneralMetadata } from '../general-metadata/general-metadata'
import { TwitterCardAppliersService } from './twitter-card-appliers.service'

@Injectable()
export class TwitterCardGeneralMetadataListenerService implements OnDestroy {
  private subscription?: Subscription

  constructor(
    @Optional()
    private readonly generalMetadataAppliersService: GeneralMetadataAppliersService | null,
    private readonly appliers: TwitterCardAppliersService,
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
      },
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
}
