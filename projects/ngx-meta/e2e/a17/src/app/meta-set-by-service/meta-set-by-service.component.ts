import { Component, OnDestroy, OnInit } from '@angular/core'
import METADATA_JSON from '../../../../cypress/fixtures/metadata.json'
import { NgxMetaService } from '@davidlj95/ngx-meta/core'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'app-meta-set-by-service',
  standalone: true,
  templateUrl: './meta-set-by-service.component.html',
  imports: [JsonPipe],
})
export class MetaSetByServiceComponent implements OnInit, OnDestroy {
  protected readonly metadata = METADATA_JSON

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
