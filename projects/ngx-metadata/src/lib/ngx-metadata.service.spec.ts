import { TestBed } from '@angular/core/testing';

import { NgxMetadataService } from './ngx-metadata.service';

describe('NgxMetadataService', () => {
  let service: NgxMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
