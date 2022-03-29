import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NationalCallSign, OpsMemberContact, OpsVehicleAttendance } from 'src/app/models/duty';
import { DutyService } from 'src/app/services/duty.service';

@Component({
  selector: 'app-duty-controller',
  templateUrl: './duty-controller.component.html',
  styleUrls: ['./duty-controller.component.scss']
})
export class DutyControllerComponent implements OnInit {

  _opsMembers: NationalCallSign[] = [];
  @Input() set opsMembers(opsMembers: NationalCallSign[]) {
    this._opsMembers = opsMembers;
    this.correlateAttendance();
  }

  opsMembersContacts: OpsMemberContact[] = [];
  latestOpsVehicleAttendances: OpsVehicleAttendance[] = [];

  attendancesWithContacts: {attendance: OpsVehicleAttendance, contact: OpsMemberContact}[] = [];

  constructor(private dutyService: DutyService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    // Get Data
    this.dutyService.getOpsContacts();
    this.dutyService.getDutyStatuses();

    // Process Data
    this.dutyService.opsContacts$.subscribe(contacts => {
      this.opsMembersContacts = contacts;
      this.correlateAttendance();
    });

    this.dutyService.dutyStatuses$.subscribe(attendances => {
      this.latestOpsVehicleAttendances = attendances;
      this.correlateAttendance();
    });

  }

  correlateAttendance() {
    this.attendancesWithContacts = [];
    console.log('correlating!', this._opsMembers, this.latestOpsVehicleAttendances, this.opsMembersContacts);
    if (this._opsMembers && this.latestOpsVehicleAttendances && this.opsMembersContacts) {

      this._opsMembers.forEach(opsMember => {
        let foundAttendance: OpsVehicleAttendance = this.latestOpsVehicleAttendances.find(attendance => attendance.vehicleRegistration === opsMember.registration);
        if (!foundAttendance) {
          foundAttendance = {
            opsVehicleAttendanceId: null,
            dateTime: this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss.SSS') + '0000Z',
            customerVehicleId: null,
            vehicleRegistration: opsMember.registration,
            vehicleAlias: null,
            dutyStatus: null,
            dutyUser: null,
            dutyDateTime: this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss.SSS') + '0000Z',
            dutyUserId: null,
            obreferenceNumber: null,
            dutyStatusId: null,
          };
        }

        // Only works if we matched an attendance by registration - flaky af
        let foundContact: OpsMemberContact = {...this.opsMembersContacts.find(contact => contact.customerVehicleId === foundAttendance?.customerVehicleId)};
        if (!foundContact) {
          foundContact = {
            alternativeNumber: '',
            customerVehicleId: foundAttendance?.customerVehicleId,
            dateTime: this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss.SSS') + '0000Z',
            previousAlternativeNumber: '',
            previousSMSNumber: '',
            smsNumber: '',
            updateDateTime: this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss.SSS') + '0000Z',
            userName: ''
          };
        }
        if (!foundContact.smsNumber || foundContact.smsNumber === 'null') {
          foundContact.smsNumber = '';
        }
        if (!foundContact.alternativeNumber || foundContact.alternativeNumber === 'null') {
          foundContact.alternativeNumber = '';
        }

        // For updating later
        this.attendancesWithContacts.push({attendance: foundAttendance, contact: foundContact});
      });
    }
  }

  toggleDutyStatusSwitch(event: boolean) {
    console.log('On Duty:', event);
  }

}
