import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Driver } from 'src/app/models/f1';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() driver!: Driver;
  @Output() driverSelected = new EventEmitter<Driver>();

  constructor() { }

  ngOnInit(): void {
  }

  selectDriver() {
    this.driverSelected.emit({
      ...this.driver,
      givenName: this.driver.givenName + ' was selected'
    } as Driver);
  }

}
