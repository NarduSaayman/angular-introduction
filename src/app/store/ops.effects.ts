import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as OpsActions from './ops.actions';
import { DutyService } from '../services/duty.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';



@Injectable()
export class OpsEffects {

  getOpsMembers$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(OpsActions.getOpsMembers),
      concatMap(() =>
        this.opsService.getNationalCallSigns()
          .pipe(
            map(opsMembers => OpsActions.getOpsMembersComplete({opsMembers})),
            catchError(error => {
              this.notificationService.error(
                'Failed to get ops members',
                error.toString(),
                { nzDuration: 0}
              );
              return of(OpsActions.getOpsMembersComplete({opsMembers: []}));
            })
          ) // End pipe
      ) // End concatMap
    ); // End action observable watcher
  }); // End effect

  getOpsMembersContacts$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(OpsActions.getOpsMembersContacts),
      concatMap(() =>
        this.opsService.getOpsContacts()
          .pipe(
            map(opsMembersContacts => OpsActions.getOpsMembersContactsComplete({opsMembersContacts})),
            catchError(error => {
              this.notificationService.error(
                'Failed to get ops members contacts',
                error.toString(),
                { nzDuration: 0}
              );
              return of(OpsActions.getOpsMembersContactsComplete({opsMembersContacts: []}));
            })
          ) // End pipe
      ) // End concatMap
    ); // End action observable watcher
  }); // End effect

  getOpsMembersDutyStatuses$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(OpsActions.getOpsMembersDutyStatuses),
      concatMap(() =>
        this.opsService.getDutyStatuses()
          .pipe(
            map(opsMembersDutyStatuses => OpsActions.getOpsMembersDutyStatusesComplete({opsMembersDutyStatuses})),
            catchError(error => {
              this.notificationService.error(
                'Failed to get ops members duty statuses',
                error.toString(),
                { nzDuration: 0}
              );
              return of(OpsActions.getOpsMembersDutyStatusesComplete({opsMembersDutyStatuses: []}));
            })
          ) // End pipe
      ) // End concatMap
    ); // End action observable watcher
  }); // End effect



  constructor(
    private actions$: Actions,
    private opsService: DutyService,
    private notificationService: NzNotificationService
  ) {}

}
