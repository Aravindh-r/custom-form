import { TestBed, inject } from '@angular/core/testing';

import { CustomformService } from './customform.service';

describe('CustomformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomformService]
    });
  });

  it('should be created', inject([CustomformService], (service: CustomformService) => {
    expect(service).toBeTruthy();
  }));
});
