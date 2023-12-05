import { Component, OnInit } from '@angular/core'
import {
  MetadataService,
  StandardModule,
} from '@davidlj95/ngx-meta/experimental'

@Component({
  selector: 'app-experimental',
  standalone: true,
  imports: [StandardModule],
  templateUrl: './experimental.component.html',
  styleUrl: './experimental.component.css',
})
export class ExperimentalComponent implements OnInit {
  constructor(private readonly metadataService: MetadataService) {}

  ngOnInit(): void {
    this.metadataService.set()
  }
}
