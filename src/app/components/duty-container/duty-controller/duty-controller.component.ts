import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CorrelatedOpsMember } from 'src/app/models/duty';
@Component({
  selector: 'app-duty-controller',
  templateUrl: './duty-controller.component.html',
  styleUrls: ['./duty-controller.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DutyControllerComponent {

  attendancesWithContacts: CorrelatedOpsMember[] = [];
  @Input() set correlatedOpsMembers(opsMembers: CorrelatedOpsMember[]) {
    this.attendancesWithContacts = JSON.parse(JSON.stringify(opsMembers));
  }
  @Output() upsertOpsMemberDutyStatus = new EventEmitter<{correlatedOpsMember: CorrelatedOpsMember, onDuty: boolean}>();

  toggleDutyStatusSwitch(correlatedOpsMember: CorrelatedOpsMember, event: boolean) {
    this.upsertOpsMemberDutyStatus.emit({correlatedOpsMember, onDuty: event});
  }

}
