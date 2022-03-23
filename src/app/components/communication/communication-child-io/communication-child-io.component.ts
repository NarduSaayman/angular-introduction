import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-communication-child-io',
  templateUrl: './communication-child-io.component.html',
  styleUrls: ['./communication-child-io.component.scss']
})
export class CommunicationChildIoComponent implements OnInit {

  @Input() name: string = 'Mark';
  
  response: string = '';
  @Input() set responseInput(resp: string) {
    if (resp.length > 0) {
      this.response = resp;
    } else {
      this.response = 'Unknown';
    }
  }
  
  @Output() noticeMe = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  noticeMePlz() {
    this.noticeMe.emit(this.name);
  }

}
