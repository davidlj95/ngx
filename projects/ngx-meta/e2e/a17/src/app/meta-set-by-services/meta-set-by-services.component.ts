import { Component, OnInit } from '@angular/core'
import {
  GeneralMetadataService,
  NgxMetaGeneralModule,
} from '@davidlj95/ngx-meta/general-metadata'
import generalMetadata from '../../../../cypress/fixtures/general-metadata.json'
import { JsonPipe } from '@angular/common'
import { NgxMetaCommonModule } from '@davidlj95/ngx-meta/common'

@Component({
  selector: 'app-meta-set-by-services',
  standalone: true,
  templateUrl: './meta-set-by-services.component.html',
  styleUrl: './meta-set-by-services.component.css',
  imports: [JsonPipe, NgxMetaCommonModule, NgxMetaGeneralModule],
})
export class MetaSetByServicesComponent implements OnInit {
  protected readonly generalMetadata = generalMetadata

  constructor(
    private readonly generalMetadataService: GeneralMetadataService,
  ) {}

  ngOnInit(): void {
    this.generalMetadataService.apply(generalMetadata)
  }
}
