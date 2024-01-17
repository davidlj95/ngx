import { Component, OnDestroy, OnInit } from '@angular/core'
import METADATA from '../../../../cypress/fixtures/metadata.json'
import { MetadataService } from '@davidlj95/ngx-meta/core'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'app-meta-set-by-service',
  standalone: true,
  templateUrl: './meta-set-by-service.component.html',
  imports: [JsonPipe],
})
export class MetaSetByServiceComponent implements OnInit, OnDestroy {
  protected readonly metadata = METADATA

  constructor(private readonly metadataService: MetadataService) {}

  ngOnInit(): void {
    this.metadataService.set(this.metadata)
  }

  ngOnDestroy(): void {
    //👇 Clear metadata when changing page
    //   If you have enabled the routing module, this is not needed
    this.metadataService.set()
  }
}
