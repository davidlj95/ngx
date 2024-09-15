import { Component, OnInit } from '@angular/core'
import { ANGULAR_ROUTER_URL, NgxMetaService } from '@davidlj95/ngx-meta/core'
import { BASE_URL } from '@/e2e/cypress/fixtures/base-url'

@Component({
  selector: 'app-url-resolution-meta',
  templateUrl: './url-resolution-meta.component.html',
})
export class UrlResolutionMetaComponent implements OnInit {
  baseUrl = BASE_URL

  constructor(private _ngxMetaService: NgxMetaService) {}

  ngOnInit(): void {
    this._ngxMetaService.set({ canonicalUrl: ANGULAR_ROUTER_URL })
  }
}
