import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, ReplaySubject } from 'rxjs';
import { NationalCallSign, OpsMemberContact, OpsVehicleAttendance } from '../models/duty';

@Injectable({
  providedIn: 'root'
})
export class DutyService {

  nationalCallSigns$ = new ReplaySubject<NationalCallSign[]>(1);
  opsContacts$ = new ReplaySubject<OpsMemberContact[]>(1);
  dutyStatuses$ = new ReplaySubject<OpsVehicleAttendance[]>(1);

  constructor(private http: HttpClient) { }

  getNationalCallSigns() {
    this.http.get('assets/callsigns.json')
      .pipe(first())
      .subscribe((response: NationalCallSign[]) => {
        this.nationalCallSigns$.next(response);
      });
  }

  getOpsContacts() {
    this.http.get('assets/contacts.json')
      .pipe(first())
      .subscribe((response: OpsMemberContact[]) => {
        this.opsContacts$.next(response);
      });
  }

  getDutyStatuses() {
    this.http.get('assets/duty.json')
      .pipe(first())
      .subscribe((response: OpsVehicleAttendance[]) => {
        this.dutyStatuses$.next(response);
      });
  }

}
