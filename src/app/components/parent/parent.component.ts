import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver, DriverResponse } from 'src/app/models/f1';
import { F1ApiService } from 'src/app/services/f1-api.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  filterText = '';
  selectedDriver: Driver = null;

  driverResponse$: Observable<DriverResponse>;

  constructor(private f1APIService: F1ApiService) { }

  ngOnInit(): void {
    this.driverResponse$ = this.f1APIService.getF1Drivers();
  }

  identifyDriver(index: number, driver: Driver): string {
    return driver.driverId;
  }

}
