import { Component, OnDestroy, OnInit } from '@angular/core'
import ONE_METADATA_JSON from '../../../../cypress/fixtures/one-metadata.json'
import { NgxMetaService } from '@davidlj95/ngx-meta/core'

@Component({
  selector: 'app-one-meta-set-by-service',
  templateUrl: './one-meta-set-by-service.component.html',
})
export class OneMetaSetByServiceComponent implements OnInit, OnDestroy {
  public readonly oneMetadataJson = ONE_METADATA_JSON

  constructor(private readonly ngxMetaService: NgxMetaService) {}

  ngOnInit(): void {
    this.ngxMetaService.setOne(
      this.oneMetadataJson.global.key,
      this.oneMetadataJson.global.value,
    )
    this.ngxMetaService.setOne(
      this.oneMetadataJson.jsonPath.key,
      this.oneMetadataJson.jsonPath.value,
    )
  }

  ngOnDestroy(): void {
    //👇 Clear metadata when changing page
    //   If you have enabled the routing module, this is not needed
    this.ngxMetaService.clear()
  }
}
