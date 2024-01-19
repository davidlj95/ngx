import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { provideLateLoadedMetadata } from './late-loaded-metadata'

@Component({
  selector: 'app-meta-late-loaded',
  templateUrl: './meta-late-loaded.component.html',
})
export class MetaLateLoadedComponent {
  protected readonly routeData: unknown
  protected readonly providerSource: string

  constructor(activatedRoute: ActivatedRoute) {
    this.routeData = activatedRoute.snapshot.data
    this.providerSource = provideLateLoadedMetadata.toString()
  }
}
