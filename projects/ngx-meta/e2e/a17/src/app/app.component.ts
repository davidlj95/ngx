import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'
import { ROUTES } from '../../../cypress/fixtures/routes'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'a17'
  protected readonly navItems = Object.values(ROUTES).map((route) => ({
    ...route,
    path: `/${route.path}`,
  }))
}
