import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { MetadataService } from '@davidlj95/ngx-meta/experimental'

@Component({
  selector: 'app-experimental',
  standalone: true,
  templateUrl: './experimental.component.html',
  styleUrl: './experimental.component.css',
})
export class ExperimentalComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly metadataService: MetadataService,
  ) {}

  ngOnInit(): void {
    this.metadataService.set({ title: 'Experimental title set later' })
    console.log('Route is', this.router.url)
  }
}
