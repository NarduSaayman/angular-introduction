import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CorrelatedOpsMember } from 'src/app/models/duty';

@Component({
  selector: 'app-selected-ops',
  templateUrl: './selected-ops.component.html',
  styleUrls: ['./selected-ops.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedOpsComponent {
  @Input() selectedCorrelatedOpsMember: CorrelatedOpsMember = null;
}
