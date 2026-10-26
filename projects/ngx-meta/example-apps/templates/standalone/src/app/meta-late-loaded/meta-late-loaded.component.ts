import { Component, inject } from '@angular/core'
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
  protected readonly routeData: unknown = inject(ActivatedRoute).snapshot.data
  protected readonly providerSourceCode =
    provideCustomMetadataManager.toString()
}
