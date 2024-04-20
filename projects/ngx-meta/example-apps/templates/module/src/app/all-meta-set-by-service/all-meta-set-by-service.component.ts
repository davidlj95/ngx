import { Component, OnDestroy, OnInit } from '@angular/core'
import ALL_METADATA_JSON from '@/e2e/cypress/fixtures/all-metadata.json'
import { NgxMetaService } from '@davidlj95/ngx-meta/core'

@Component({
  selector: 'app-all-meta-set-by-service',
  templateUrl: './all-meta-set-by-service.component.html',
})
export class AllMetaSetByServiceComponent implements OnInit, OnDestroy {
  protected readonly metadata = ALL_METADATA_JSON

  constructor(private readonly ngxMetaService: NgxMetaService) {}

  ngOnInit(): void {
    this.ngxMetaService.set(this.metadata)
  }

  ngOnDestroy(): void {
    //👇 Clear metadata when changing page
    //   If you have enabled the routing module, this is not needed
    this.ngxMetaService.clear()
  }
}
