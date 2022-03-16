import { Component, OnInit } from '@angular/core';
import { SharedVarService } from 'src/app/services/shared-var.service';

@Component({
  selector: 'app-communication-child-service',
  templateUrl: './communication-child-service.component.html',
  styleUrls: ['./communication-child-service.component.scss']
})
export class CommunicationChildServiceComponent implements OnInit {

  constructor(public sharedService: SharedVarService) { }

  ngOnInit() {
  }

  changeActor() {
    if (this.sharedService.actor === 'For Real') {
      this.sharedService.actor = 'Gerara Here';
    } else {
      this.sharedService.actor = 'For Real';
    }
  }

}
