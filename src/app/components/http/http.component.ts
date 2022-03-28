import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Driver } from 'src/app/models/f1';
import { F1ApiService } from 'src/app/services/f1-api.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<null>();

  drivers: Driver[] = [];

  constructor(private f1APIService: F1ApiService) { }

  ngOnInit() {
    this.f1APIService.getF1Drivers()
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        if (response?.MRData?.DriverTable?.Drivers?.length > 0) {
          this.drivers = response.MRData.DriverTable.Drivers;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  trackDriver(index: number, driver: Driver) {
    return driver.driverId + driver.permanentNumber;
  }

}
