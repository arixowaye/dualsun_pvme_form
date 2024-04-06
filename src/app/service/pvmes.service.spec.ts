import { TestBed } from '@angular/core/testing';

import { PvmesService } from './pvmes.service';

describe('PvmesService', () => {
  let service: PvmesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PvmesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
