import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-communication-child-io',
  templateUrl: './communication-child-io.component.html',
  styleUrls: ['./communication-child-io.component.scss']
})
export class CommunicationChildIoComponent implements OnInit {

  @Input() name: string = 'Mark';
  @Input() response: string;
  @Output() noticeMe = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  noticeMePlz() {
    this.noticeMe.emit(this.name);
  }

}
