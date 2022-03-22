import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.scss']
})
export class ConditionalComponent implements OnInit {

  grads = [
    'Ashir',
    'Ivan',
    'Nardus',
    'Omega',
    'Ruan',
    'Ziv',
  ];

  showTheGrads = true;

  selectedGrad = this.grads[0];

  constructor() { }

  ngOnInit() {
  }

}
