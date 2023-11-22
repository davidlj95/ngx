import { ComponentFixture, TestBed } from '@angular/core/testing'

import { NgxMetadataComponent } from './ngx-metadata.component'

describe('NgxMetadataComponent', () => {
  let component: NgxMetadataComponent
  let fixture: ComponentFixture<NgxMetadataComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxMetadataComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(NgxMetadataComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
