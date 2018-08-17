import { TestBed, inject } from '@angular/core/testing';

import { DataserveService } from './dataserve.service';

describe('DataserveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataserveService]
    });
  });

  it('should be created', inject([DataserveService], (service: DataserveService) => {
    expect(service).toBeTruthy();
  }));
});
