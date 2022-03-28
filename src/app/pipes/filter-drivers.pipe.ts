import { Pipe, PipeTransform } from '@angular/core';
import { Driver } from '../models/f1';

@Pipe({
  name: 'filterDrivers'
})
export class FilterDriversPipe implements PipeTransform {

  transform(drivers: Driver[], filterText: string): Driver[] {
    if (!filterText || filterText.length === 0) {
      return drivers;
    }

    const filterTxtLower = filterText.toLowerCase();

    return drivers.filter(driver => 
      driver.givenName.toLowerCase().indexOf(filterTxtLower) > -1 ||
      driver.familyName.toLowerCase().indexOf(filterTxtLower) > -1 ||
      driver.nationality.toLowerCase().indexOf(filterTxtLower) > -1 ||
      driver.permanentNumber.toLowerCase().indexOf(filterTxtLower) > -1
    );
  }

}
