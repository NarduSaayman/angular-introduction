import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CorrelatedOpsMember, NationalCallSign, OpsMemberContact, OpsVehicleAttendance } from 'src/app/models/duty';

import { OpsState } from 'src/app/store/ops.reducer';
import * as OpsActions from 'src/app/store/ops.actions';
import * as OpsSelectors from 'src/app/store/ops.selectors';


@Component({
  selector: 'app-duty-container',
  templateUrl: './duty-container.component.html',
  styleUrls: ['./duty-container.component.scss']
})
export class DutyContainerComponent implements OnInit {

  isLoading$: Observable<boolean>;
  opsMembers$: Observable<NationalCallSign[]>;
  correlatedOpsMembers$: Observable<CorrelatedOpsMember[]>;

  selectedOpsMember$: Observable<NationalCallSign>;
  selectedCorrelatedOpsMember$: Observable<CorrelatedOpsMember>;

  constructor(private opsStore: Store<OpsState>) { }

  ngOnInit(): void {
    // Fetch errithang
    this.opsStore.dispatch(OpsActions.getOpsMembers());
    this.opsStore.dispatch(OpsActions.getOpsMembersContacts());
    this.opsStore.dispatch(OpsActions.getOpsMembersDutyStatuses());

    // Listen to errithang
    this.isLoading$ = this.opsStore.pipe(select(OpsSelectors.selectIsLoading));
    this.opsMembers$ = this.opsStore.pipe(select(OpsSelectors.selectOpsMembers));
    this.correlatedOpsMembers$ = this.opsStore.pipe(select(OpsSelectors.selectCorrelatedOpsMembers));
    this.selectedOpsMember$ = this.opsStore.pipe(select(OpsSelectors.selectSelectedOpsMember));
    this.selectedCorrelatedOpsMember$ = this.opsStore.pipe(select(OpsSelectors.selectSelectedCorrelatedOpsMember));
  }

  selectOpsMember(opsMember: NationalCallSign) {
    this.opsStore.dispatch(OpsActions.setSelectedOpsMember({opsMember}));
  }

  upsetDutyStatus(event: {correlatedOpsMember: CorrelatedOpsMember, onDuty: boolean}) {
    const newAttendance: OpsVehicleAttendance = {
      ...event?.correlatedOpsMember?.attendance,
      dutyStatus: event.onDuty ? 'On Duty' : 'Off Duty',
      dutyUser: 'tim',
      dutyDateTime: new Date().toString(),
      dutyUserId: 0,
      dutyStatusId: event.onDuty ? 1 : 0
    }
    this.opsStore.dispatch(OpsActions.setOpsMemberDutyStatus({dutyStatus: newAttendance}))
  }

}
