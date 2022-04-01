import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue',
        color: 'whitesmoke'
      })),
      state('red', style({
        height: '150px',
        opacity: 0.8,
        backgroundColor: 'red',
        color: 'whitesmoke'
      })),
      transition('open => closed', [
        animate('1s ease') // 'duration delay easing'
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
      transition('* => *', [
        animate('0.5s ease')
      ]),
    ]),
  ]
})
export class AnimationComponent {

  isOpen = true;
  isRed = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  toggleRed() {
    this.isRed = !this.isRed;
  }

}
