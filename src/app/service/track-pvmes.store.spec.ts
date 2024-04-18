import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { SpyObj } from "../shared/types";
import { PvmesService } from "./pvmes.service";
import { PVMEStore } from "./track-pvmes.store";
import { of } from "rxjs";

describe('PVMEStore', () => {
    const pvmesService = jasmine.createSpyObj<SpyObj<PvmesService>>('PvmesService', ['getAllPV']);
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
            {
              provide: PvmesService,
              useValue: pvmesService
            },
            PVMEStore
          ]
      });
  });
  it('should get state', () => {
    const store = TestBed.inject(PVMEStore);
    
    pvmesService.getAllPV.and.returnValue(of([]));
    store.loadAll().subscribe();

    expect(store.pvmes()).toEqual([]);

    pvmesService.getAllPV.and.returnValue(of([{}]));
    store.loadAll().subscribe();

    expect(store.pvmes().length).toEqual(1);
  });
});