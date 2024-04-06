import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { allPvmesResolver } from './all-pvmes.resolver';

describe('allPvmesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => allPvmesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
