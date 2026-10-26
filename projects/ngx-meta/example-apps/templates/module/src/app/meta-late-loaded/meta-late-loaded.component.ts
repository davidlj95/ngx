import { Component, inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { provideCustomMetadataManager } from './provide-custom-metadata-manager'

@Component({
  selector: 'app-meta-late-loaded',
  templateUrl: './meta-late-loaded.component.html',
})
export class MetaLateLoadedComponent {
  protected readonly routeData: unknown = inject(ActivatedRoute).snapshot.data
  protected readonly providerSourceCode: string =
    provideCustomMetadataManager().toString()
}
