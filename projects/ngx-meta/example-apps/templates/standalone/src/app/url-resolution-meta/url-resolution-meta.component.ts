import { Component, inject, OnInit } from '@angular/core'
import { ANGULAR_ROUTER_URL, NgxMetaService } from '@davidlj95/ngx-meta/core'
import { BASE_URL } from '@/e2e/cypress/fixtures/base-url'

@Component({
  selector: 'app-url-resolution-meta',
  standalone: true,
  templateUrl: './url-resolution-meta.component.html',
})
export class UrlResolutionMetaComponent implements OnInit {
  private _ngxMetaService = inject(NgxMetaService)
  baseUrl = BASE_URL

  ngOnInit(): void {
    this._ngxMetaService.set({ canonicalUrl: ANGULAR_ROUTER_URL })
  }
}
