import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import {map} from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  constructor(private httpClient: HttpClient) { }

  loadProducts() {
    const url = environment.API_EndPoint + '/view.php';
    return this.httpClient.get(url).pipe(map(data =>data));
  }

  createProduct(data: any): Observable<HttpResponse<any>> {
    const url = environment.API_EndPoint + '/create.php';
    return this.httpClient.post<HttpResponse<any>>(url, data).pipe(map(data =>data));
  }
}
