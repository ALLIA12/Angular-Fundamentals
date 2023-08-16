import { TestBed } from '@angular/core/testing';

import { DataServiceTempService } from './data-service-temp.service';

describe('DataServiceTempService', () => {
  let service: DataServiceTempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataServiceTempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
