import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PostPV } from '../component/pvmes/model/post-pv.model';

@Injectable({
  providedIn: 'root'
})
export class PvmesService {
  private readonly httpClient = inject(HttpClient);
  private readonly PV_URL = 'http://localhost:3000/pv_mise_en_services';

  public postPV(pv: PostPV): Observable<PostPV> {
    return this.httpClient.post<PostPV>(this.PV_URL, pv);
  }

  public getAllPV(): Observable<PostPV[]> {
    return this.httpClient.get<PostPV[]>(this.PV_URL);
  }
}
