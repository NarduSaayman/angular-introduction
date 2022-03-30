import { createFeatureSelector, createSelector } from '@ngrx/store';
import Utils from '../utils/utils';
import * as fromOps from './ops.reducer';

export const selectOpsState = createFeatureSelector<fromOps.OpsState>(
  fromOps.opsFeatureKey
);

export const selectIsLoading = createSelector(
  selectOpsState,
  (state) => state.isLoading
);

export const selectOpsMembers = createSelector(
  selectOpsState,
  (state) => state.opsMembers
);

export const selectOpsMembersContacts = createSelector(
  selectOpsState,
  (state) => state.opsMembersContacts
);

export const selectOpsMembersDutyStatuses = createSelector(
  selectOpsState,
  (state) => state.opsMembersDutyStatuses
);

export const selectSelectedOpsMember = createSelector(
  selectOpsState,
  (state) => state.selectedOpsMember
);

export const selectCorrelatedOpsMembers = createSelector(
  selectOpsState,
  (state) => Utils.correlateAttendance(state.opsMembers, state.opsMembersDutyStatuses, state.opsMembersContacts)
);

export const selectCorrelatedOpsMembersOnDuty = createSelector(
  selectCorrelatedOpsMembers,
  (correlatedOpsMembers) => correlatedOpsMembers.filter(opsMember => opsMember.attendance?.dutyStatusId === 1)
);

export const selectSelectedCorrelatedOpsMember = createSelector(
  selectOpsState,
  selectCorrelatedOpsMembers,
  (state, correlatedOpsMembers) => correlatedOpsMembers.find(correlatedOpsMember => correlatedOpsMember.opsMember?.nationalCallSignId === state.selectedOpsMember?.nationalCallSignId)
);
