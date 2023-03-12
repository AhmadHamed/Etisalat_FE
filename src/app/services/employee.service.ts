import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

const baseUrl = 'http://localhost:8090/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {
  }

  getPaginatedEmployees(pageNumber: number, pageSize: number): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('page', String(pageNumber));
    queryParams = queryParams.append('size', String(pageSize));
    return this.http.get(baseUrl, {params: queryParams});
  }

  get(id): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
