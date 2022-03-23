import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DriverResponse } from '../models/f1';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class F1ApiService {

  constructor(private http: HttpClient) { }

  getF1Drivers(): Observable<DriverResponse> {
    return this.http.get<DriverResponse>(`https://ergast.com/api/f1/current/drivers.json`);
  }
}
