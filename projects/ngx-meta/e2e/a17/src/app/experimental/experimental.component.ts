import { Component, OnInit } from '@angular/core'
import { MetadataService } from '@davidlj95/ngx-meta/core'
import { NgxMetaStandardModule } from '@davidlj95/ngx-meta/standard'

@Component({
  selector: 'app-experimental',
  standalone: true,
  imports: [NgxMetaStandardModule],
  templateUrl: './experimental.component.html',
  styleUrl: './experimental.component.css',
})
export class ExperimentalComponent implements OnInit {
  constructor(private readonly metadataService: MetadataService) {}

  ngOnInit(): void {
    //this.metadataService.set()
  }
}
