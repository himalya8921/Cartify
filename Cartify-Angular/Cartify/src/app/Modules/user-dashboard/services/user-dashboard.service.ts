import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { productType } from 'src/app/Models/productType.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {
private getProductTypeUrl = `${environment.apiUrl}/ProductType/GetAllProductTypes`;
  constructor(private http: HttpClient) { }

  GetAllProductType(): Observable<any> {
    return this.http.get<any>(this.getProductTypeUrl);
  }
}
