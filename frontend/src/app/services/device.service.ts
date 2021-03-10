import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Device} from '../models/device.model';
const baseUrl = 'http://localhost:5000/api/v1/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  constructor(private http: HttpClient) {
  }
  getAll(id: any): Observable<Device[]> {
    return this.http.get<Device[]>(`${baseUrl}/all/${id}`);
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  getOne(code: any): Observable<Device> {
    return this.http.get<Device>(`${baseUrl}/${code}`);
  }
  create(id: any, data: any): Observable<any> {
    return this.http.post(`${baseUrl}/${id}`,  data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }
  updateAttribut(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/attribut/${id}`, data);
  }
}
