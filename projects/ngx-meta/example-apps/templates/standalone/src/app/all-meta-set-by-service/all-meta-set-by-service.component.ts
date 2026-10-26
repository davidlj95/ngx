import { Component, inject, OnDestroy, OnInit } from '@angular/core'
import ALL_METADATA_JSON from '@/e2e/cypress/fixtures/all-metadata.json'
import { NgxMetaService } from '@davidlj95/ngx-meta/core'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'app-all-meta-set-by-service',
  standalone: true,
  templateUrl: './all-meta-set-by-service.component.html',
  imports: [JsonPipe],
})
export class AllMetaSetByServiceComponent implements OnInit, OnDestroy {
  protected readonly metadata = ALL_METADATA_JSON
  private readonly ngxMetaService = inject(NgxMetaService)

  ngOnInit(): void {
    this.ngxMetaService.set(this.metadata)
  }

  ngOnDestroy(): void {
    //👇 Clear metadata when changing page
    //   If you have enabled the library's routing module, this is not needed
    this.ngxMetaService.clear()
  }
}
