import { Component } from '@angular/core'
import { ROUTES } from '../../../cypress/fixtures/routes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'a15'
  protected readonly navItems = Object.values(ROUTES).map((route) => ({
    ...route,
    path: `/${route.path}`,
  }))
}
