import { Component, ViewEncapsulation } from '@angular/core'
import { ROUTES } from '../../../../cypress/fixtures/routes'
// @ts-ignore (in templates directory file doesn't exist)
import packageJson from '../../package.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // A bit of 💅. Serif fonts are 🤮
  styles: [
    `
      body {
        font-family: sans-serif;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  readonly title = packageJson.name
  protected readonly navItems = Object.values(ROUTES).map((route) => ({
    ...route,
    path: `/${route.path}`,
  }))
}
