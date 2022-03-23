import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluated',
  templateUrl: './evaluated.component.html',
  styleUrls: ['./evaluated.component.scss']
})
export class EvaluatedComponent implements OnInit {

  color = 'black';
  selectedIndex = 0;
  type = 'text';

  constructor() { }

  ngOnInit() {
  }

  changeColor() {
    if (this.color === 'black') {
      this.color = 'red';
    } else {
      this.color = 'black';
    }
  }

}
