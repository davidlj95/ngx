import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { JsonPipe } from '@angular/common'
import { provideCustomMetadataManager } from './provide-custom-metadata-manager'

@Component({
  selector: 'app-meta-late-loaded',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './meta-late-loaded.component.html',
})
export class MetaLateLoadedComponent {
  protected readonly routeData: unknown
  protected readonly providerSourceCode: string

  constructor(activatedRoute: ActivatedRoute) {
    this.routeData = activatedRoute.snapshot.data
    this.providerSourceCode = provideCustomMetadataManager.toString()
  }
}
