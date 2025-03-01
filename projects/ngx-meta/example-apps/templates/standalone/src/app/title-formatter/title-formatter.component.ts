import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import TITLE_FORMAT_JSON from '@/e2e/cypress/fixtures/title-format.json'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'app-title-formatter',
  templateUrl: './title-formatter.component.html',
  standalone: true,
  imports: [JsonPipe],
})
export class TitleFormatterComponent {
  protected readonly routeData: unknown
  protected readonly titleFormat = TITLE_FORMAT_JSON

  constructor(activatedRoute: ActivatedRoute) {
    this.routeData = activatedRoute.snapshot.data
  }
}
