import { TestBed } from '@angular/core/testing';
import { PvmesService } from './pvmes.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { PostPV } from '../component/pvmes/model/post-pv.model';

describe('PvmesService', () => {
  let service: PvmesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PvmesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should get alls PVMEs', () => {
    service.getAllPV().subscribe();

    let req = httpTestingController.expectOne('http://localhost:3000/pv_mise_en_services');
    expect(req.request.method).toEqual('GET');

    req.flush({});
    httpTestingController.verify();
  });

  it('should post a PVME', () => {
    service.postPV({} as PostPV).subscribe();

    let req = httpTestingController.expectOne('http://localhost:3000/pv_mise_en_services');
    expect(req.request.method).toEqual('POST');

    req.flush({});
    httpTestingController.verify();
  });
});
