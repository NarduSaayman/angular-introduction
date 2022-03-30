import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NationalCallSign, OpsMemberContact, OpsVehicleAttendance } from '../models/duty';

@Injectable({
  providedIn: 'root'
})
export class DutyService {

  constructor(private http: HttpClient) { }

  getNationalCallSigns(): Observable<NationalCallSign[]> {
    return this.http.get<NationalCallSign[]>('assets/callsigns.json');
  }

  getOpsContacts(): Observable<OpsMemberContact[]> {
    return this.http.get<OpsMemberContact[]>('assets/contacts.json');
  }

  getDutyStatuses(): Observable<OpsVehicleAttendance[]> {
    return this.http.get<OpsVehicleAttendance[]>('assets/duty.json');
  }

}
