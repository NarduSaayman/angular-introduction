import { CorrelatedOpsMember, NationalCallSign, OpsMemberContact, OpsVehicleAttendance } from "../models/duty";

export default class Utils {



  /* 
      This correlates dudes
  */
  static correlateAttendance(
    opsMembers: NationalCallSign[],
    latestOpsVehicleAttendances: OpsVehicleAttendance[],
    opsMembersContacts: OpsMemberContact[]
  ): CorrelatedOpsMember[] {

    const attendancesWithContacts: CorrelatedOpsMember[] = [];
    if (opsMembers && latestOpsVehicleAttendances && opsMembersContacts) {

      opsMembers.forEach(opsMember => {
        let foundAttendance: OpsVehicleAttendance = latestOpsVehicleAttendances.find(attendance => attendance.vehicleRegistration === opsMember.registration);
        if (!foundAttendance) {
          foundAttendance = {
            opsVehicleAttendanceId: null,
            dateTime: new Date().toString(),
            customerVehicleId: null,
            vehicleRegistration: opsMember.registration,
            vehicleAlias: null,
            dutyStatus: null,
            dutyUser: null,
            dutyDateTime: new Date().toString(),
            dutyUserId: null,
            obreferenceNumber: null,
            dutyStatusId: null,
          };
        }

        // Only works if we matched an attendance by registration - flaky af
        let foundContact: OpsMemberContact = { ...opsMembersContacts.find(contact => contact.customerVehicleId === foundAttendance?.customerVehicleId) };
        if (!foundContact) {
          foundContact = {
            alternativeNumber: '',
            customerVehicleId: foundAttendance?.customerVehicleId,
            dateTime: new Date().toString(),
            previousAlternativeNumber: '',
            previousSMSNumber: '',
            smsNumber: '',
            updateDateTime: new Date().toString(),
            userName: ''
          };
        }
        if (!foundContact.smsNumber || foundContact.smsNumber === 'null') {
          foundContact.smsNumber = '';
        }
        if (!foundContact.alternativeNumber || foundContact.alternativeNumber === 'null') {
          foundContact.alternativeNumber = '';
        }

        attendancesWithContacts.push(
          {
            opsMember,
            attendance: foundAttendance,
            contact: foundContact
          }
        );
      });
    }

    return attendancesWithContacts;
  }
}