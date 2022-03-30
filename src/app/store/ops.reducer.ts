import { createReducer, on } from '@ngrx/store';
import { NationalCallSign, OpsMemberContact, OpsVehicleAttendance } from '../models/duty';
import * as OpsActions from './ops.actions';

export const opsFeatureKey = 'ops';

export interface OpsState {
  isLoading: boolean;
  selectedOpsMember: NationalCallSign;
  opsMembers: NationalCallSign[];
  opsMembersContacts: OpsMemberContact[];
  opsMembersDutyStatuses: OpsVehicleAttendance[];
}

export const initialState: OpsState = {
  isLoading: false,
  selectedOpsMember: null,
  opsMembers: [],
  opsMembersContacts: [],
  opsMembersDutyStatuses:[]
};

export const reducer = createReducer(
  initialState,

  on(OpsActions.getOpsMembers, state => ({...state, isLoading: true})),
  on(OpsActions.getOpsMembersComplete, (state, { opsMembers }) => (
    {
      ...state, 
      isLoading: false,
      opsMembers
    }
  )),
  on(OpsActions.getOpsMembersContacts, state => ({...state, isLoading: true})),
  on(OpsActions.getOpsMembersContactsComplete, (state, { opsMembersContacts }) => (
    {
      ...state, 
      isLoading: false,
      opsMembersContacts
    }
  )),  
  on(OpsActions.getOpsMembersDutyStatuses, state => ({...state, isLoading: true})),
  on(OpsActions.getOpsMembersDutyStatusesComplete, (state, { opsMembersDutyStatuses }) => (
    {
      ...state, 
      isLoading: false,
      opsMembersDutyStatuses
    }
  )),


  on(OpsActions.setSelectedOpsMember, (state, {opsMember}) => (
    {
      ...state, 
      selectedOpsMember: opsMember
    }
  )),

);
