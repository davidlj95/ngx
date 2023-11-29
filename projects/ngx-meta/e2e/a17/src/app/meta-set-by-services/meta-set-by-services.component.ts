import { Component, OnInit } from '@angular/core'
import { NgxMetaCommonModule } from '@davidlj95/ngx-meta/common'
import {
  GeneralMetadataService,
  NgxMetaGeneralModule,
} from '@davidlj95/ngx-meta/general-metadata'
import generalMetadata from '../../../../cypress/fixtures/general-metadata.json'
import {
  NgxMetaOpenGraphModule,
  OpenGraphAppliersService,
  OpenGraphType,
} from '@davidlj95/ngx-meta/open-graph'
import openGraphSpecific from '../../../../cypress/fixtures/open-graph-specific.json'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'app-meta-set-by-services',
  standalone: true,
  templateUrl: './meta-set-by-services.component.html',
  styleUrl: './meta-set-by-services.component.css',
  imports: [
    JsonPipe,
    NgxMetaCommonModule,
    NgxMetaGeneralModule,
    NgxMetaOpenGraphModule,
  ],
})
export class MetaSetByServicesComponent implements OnInit {
  protected readonly generalMetadata = generalMetadata
  protected readonly openGraphSpecifics = openGraphSpecific

  constructor(
    private readonly generalMetadataService: GeneralMetadataService,
    private readonly openGraphAppliersService: OpenGraphAppliersService,
  ) {}

  ngOnInit(): void {
    this.generalMetadataService.apply(generalMetadata)
    this.openGraphAppliersService.type(openGraphSpecific.type as OpenGraphType)
    this.openGraphAppliersService.image(openGraphSpecific.image)
  }
}
