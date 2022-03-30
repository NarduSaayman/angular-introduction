import { createAction, props } from '@ngrx/store';
import { NationalCallSign, OpsMemberContact, OpsVehicleAttendance } from '../models/duty';

// API Actions

export const getOpsMembers = createAction(
  '[Ops] getOpsMembers'
);

export const getOpsMembersComplete = createAction(
  '[Ops] getOpsMembersComplete',
  props<{ opsMembers: NationalCallSign[] }>()
);

export const getOpsMembersContacts = createAction(
  '[Ops] getOpsMembersContacts'
);

export const getOpsMembersContactsComplete = createAction(
  '[Ops] getOpsMembersContactsComplete',
  props<{ opsMembersContacts: OpsMemberContact[] }>()
);

export const getOpsMembersDutyStatuses = createAction(
  '[Ops] getOpsMembersDutyStatuses'
);

export const getOpsMembersDutyStatusesComplete = createAction(
  '[Ops] getOpsMembersDutyStatusesComplete',
  props<{ opsMembersDutyStatuses: OpsVehicleAttendance[] }>()
);

export const upsertOpsMemberContactDetails = createAction(
  '[Ops] upsertOpsMemberContactDetails',
  props<{ opsMemberContactDetails: OpsMemberContact }>()
);

export const setOpsMemberDutyStatus = createAction(
  '[Ops] setOpsMemberDutyStatus',
  props<{ dutyStatus: OpsVehicleAttendance }>()
);

// UI / Client Actions

export const setSelectedOpsMember = createAction(
  '[Ops] setSelectedOpsMember',
  props<{ opsMember: NationalCallSign }>()
);
