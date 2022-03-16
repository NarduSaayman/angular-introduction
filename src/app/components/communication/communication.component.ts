import { Component, OnInit } from '@angular/core';
import { SharedVarService } from 'src/app/services/shared-var.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent implements OnInit {

  chat = `Parent: Who wants to go first?`;
  response = `...`;
  user = {
    name: 'Tim',
    surname: 'Headley'
  };

  constructor(public sharedService: SharedVarService) { }

  ngOnInit() {
  }

  startOver() {
    this.chat = `Parent: Who wants to go first?`;
    this.response = `...`;
  }

  addNaggingChildMessage(child: string) {
    this.chat += `\n${child}: Pick me, pick me!\nOh hi, ${child}!\n\nParent: Who's next?`;
    this.response = `Oh hi, ${child}!`;
  }

}
