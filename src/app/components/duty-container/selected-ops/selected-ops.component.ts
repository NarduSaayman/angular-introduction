import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NationalCallSign, OpsMemberContact, OpsVehicleAttendance } from 'src/app/models/duty';
import { DutyService } from 'src/app/services/duty.service';

@Component({
  selector: 'app-selected-ops',
  templateUrl: './selected-ops.component.html',
  styleUrls: ['./selected-ops.component.scss']
})
export class SelectedOpsComponent implements OnInit {

  _selectedOpsMember: NationalCallSign = null;
  @Input() set selectedOpsMember(opsMember: NationalCallSign) {
    this._selectedOpsMember = opsMember;
    this.correlateAttendance();
  }

  opsMembersContacts: OpsMemberContact[] = [];
  latestOpsVehicleAttendances: OpsVehicleAttendance[] = [];

  attendanceWithContacts: {attendance: OpsVehicleAttendance, contact: OpsMemberContact} = null;

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
    this.attendanceWithContacts = null;
    if (this._selectedOpsMember && this.latestOpsVehicleAttendances && this.opsMembersContacts) {

        let foundAttendance: OpsVehicleAttendance = this.latestOpsVehicleAttendances.find(attendance => attendance.vehicleRegistration === this._selectedOpsMember.registration);
        if (!foundAttendance) {
          foundAttendance = {
            opsVehicleAttendanceId: null,
            dateTime: this.datePipe.transform(new Date(), 'yyyy-MM-ddTHH:mm:ss.SSS') + '0000Z',
            customerVehicleId: null,
            vehicleRegistration: this._selectedOpsMember.registration,
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
        this.attendanceWithContacts = {attendance: foundAttendance, contact: foundContact};
    }
  }

}
