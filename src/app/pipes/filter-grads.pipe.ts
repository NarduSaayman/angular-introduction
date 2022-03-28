import { Pipe, PipeTransform } from '@angular/core';
import { Grad } from '../models/grad';

@Pipe({
  name: 'filterGrads'
})
export class FilterGradsPipe implements PipeTransform {

  transform(grads: Grad[], filterText: string): Grad[] {
    if (!filterText || filterText.length === 0) {
      return grads;
    }

    const filterTxtLower = filterText.toLowerCase();

    return grads.filter(g => 
      g.name.toLowerCase().indexOf(filterTxtLower) > -1 ||
      g.surname.toLowerCase().indexOf(filterTxtLower) > -1
    );
  }

}
