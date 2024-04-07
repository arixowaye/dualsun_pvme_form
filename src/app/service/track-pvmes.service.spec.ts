import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { TrackPvmesService } from "./track-pvmes.service";
import { SpyObj } from "../shared/types";
import { PvmesService } from "./pvmes.service";
import { of } from "rxjs";
import { allPVMEs } from "src/UTMocks/pvmes.mock";

describe('TrackPvmesService', () => {
    let service: TrackPvmesService;
    const pvmesService = jasmine.createSpyObj<SpyObj<PvmesService>>('PvmesService', ['getAllPV']);
    pvmesService.getAllPV.and.returnValue(of([]));
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [
            {
              provide: PvmesService,
              useValue: pvmesService
            }
          ]
      });
      service = TestBed.inject(TrackPvmesService);
  });
  it('pvmeQuantity should be 0', () => {
    expect(service.pvmeQuantity()).toEqual(0);
  });
  it('allPVMes should be empty', () => {
      expect(service.allPVMes().length).toEqual(0);
  });
  it('quantity should be correctly incremented', () => {
    service.incrementPvmeBadgeSignal.set(false);
    expect(service.pvmeQuantity()).toEqual(0);

    service.incrementPvmeBadgeSignal.set(true);
    expect(service.pvmeQuantity()).toEqual(1);
  });
  it('should correctly update fetched data', () => {
    expect(service.allPVMes()).toEqual([]);

    pvmesService.getAllPV.and.returnValue(of(allPVMEs));
    expect(service.allPVMes()).toEqual([]);

    service.refreshAllPVMes.next(true);
    expect(service.allPVMes()).toEqual(allPVMEs);
  });
});