import { Component } from '@angular/core'
import {
  CoreModule,
  MetadataService,
  StandardModule,
} from '@davidlj95/ngx-meta/experimental'

@Component({
  selector: 'app-experimental',
  standalone: true,
  imports: [CoreModule, StandardModule],
  templateUrl: './experimental.component.html',
  styleUrl: './experimental.component.css',
})
export class ExperimentalComponent {
  constructor(private readonly metadataService: MetadataService) {
    this.metadataService.set({})
  }
}
