import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from '../model/service.model';


@Injectable({
  providedIn: 'root'
})
export class CService {

  constructor(private http: HttpClient) { }
  baseUrl = 'http://localhost:3000/service/';

  getServices() {
    return this.http.get<Service[]>(this.baseUrl);
  }
  deleteServices(id: number) {
    return this.http.delete<Service[]>(this.baseUrl + id);
  }
  createUser(service: Service) {
    return this.http.post(this.baseUrl, service);
  }
  getServiceId(id: number) {
    return this.http.get<Service>(this.baseUrl  + id);
  }
  updateService(service: Service) {
    return this.http.put(this.baseUrl  + service.id, service);
  }
}