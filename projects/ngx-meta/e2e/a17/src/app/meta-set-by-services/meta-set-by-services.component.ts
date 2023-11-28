import { Component, OnInit } from '@angular/core'
import { GeneralMetadataService } from '@davidlj95/ngx-meta/general-metadata'
import generalMetaSetByService from '../../../../cypress/fixtures/general-meta-set-by-service.json'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'app-meta-set-by-services',
  standalone: true,
  templateUrl: './meta-set-by-services.component.html',
  styleUrl: './meta-set-by-services.component.css',
  imports: [JsonPipe],
})
export class MetaSetByServicesComponent implements OnInit {
  constructor(
    private readonly generalMetadataService: GeneralMetadataService,
  ) {}

  ngOnInit(): void {
    this.generalMetadataService.apply(generalMetaSetByService)
  }

  protected readonly generalMetaSetByService = generalMetaSetByService
}
