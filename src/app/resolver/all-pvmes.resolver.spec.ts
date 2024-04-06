import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { allPvmesResolver } from './all-pvmes.resolver';
import { PvmesService } from '../service/pvmes.service';
import { of } from 'rxjs';

describe('allPvmesResolver', () => {
  const executeResolver = () => 
      TestBed.runInInjectionContext(() => allPvmesResolver());

  const pvmesService = jasmine.createSpyObj<PvmesService>('PvmesService', ['getAllPV']);
  pvmesService.getAllPV.and.returnValue(of([]));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: PvmesService,
          useValue: pvmesService
        }
      ]
    });
  });

  it('should be created', (done) => {
    const result = executeResolver();
    result.subscribe({
      next: pvs => {
        expect(pvs).toEqual([]);
        done();
      }
    });
  });
});
