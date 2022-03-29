import { Component, OnInit } from '@angular/core';
import { NationalCallSign } from 'src/app/models/duty';
import { DutyService } from 'src/app/services/duty.service';

@Component({
  selector: 'app-duty-container',
  templateUrl: './duty-container.component.html',
  styleUrls: ['./duty-container.component.scss']
})
export class DutyContainerComponent implements OnInit {

  opsMembers: NationalCallSign[] = [];
  selectedOpsMember: NationalCallSign = null;

  constructor(private dutyService: DutyService) { }

  ngOnInit(): void {
    // Set up call
    this.dutyService.getNationalCallSigns();

    // Listen for changes
    this.dutyService.nationalCallSigns$.subscribe(opsDudes => this.opsMembers = opsDudes);

  }

  selectOpsMember(opsMember: NationalCallSign) {
    this.selectedOpsMember = opsMember;
  }

}
