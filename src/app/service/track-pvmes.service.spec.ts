import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { TrackPvmesService } from "./track-pvmes.service";
import { SpyObj } from "../shared/types";
import { PvmesService } from "./pvmes.service";

describe('TrackPvmesService', () => {
    let service: TrackPvmesService;
    const pvmesService = jasmine.createSpyObj<SpyObj<PvmesService>>('PvmesService', ['getAllPV']);
  
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
  it('should create', () => {
    expect(service).toBeTruthy();
  });
});