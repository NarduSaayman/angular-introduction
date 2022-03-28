import { Component, OnInit } from '@angular/core';
import { Grad } from 'src/app/models/grad';
import { ExponentialStrengthPipe } from 'src/app/pipes/exponential-strength.pipe'; 

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  filterText = '';
  grads: Grad[] = [
    {
      name: 'Andries',
      surname: 'Chimule'
    },
    {
      name: 'Ashir',
      surname: 'Mohabir'
    },
    {
      name: 'Ivan',
      surname: 'Swart'
    },
    {
      name: 'Nardus',
      surname: 'Saayman'
    },
    {
      name: 'Ruan',
      surname: 'van der Merwe'
    },
    {
      name: 'Zivai',
      surname: 'Kanengoni'
    }
  ];

  now = new Date();
  decimal = Math.PI;
  percent = 75.23412;
  cost = 2876278545.99;

  constructor(private expPipe: ExponentialStrengthPipe) { }

  ngOnInit(): void {
    console.log(this.expPipe.transform(2, 3));
  }

  identifyGrad(index: number, grad: Grad): string {
    return grad.name + grad.surname;
  }

}
