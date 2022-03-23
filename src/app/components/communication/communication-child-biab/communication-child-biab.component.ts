import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-communication-child-biab',
  templateUrl: './communication-child-biab.component.html',
  styleUrls: ['./communication-child-biab.component.scss']
})
export class CommunicationChildBiabComponent {

  @Input() fieldToUpdate: string;
  @Output() fieldToUpdateChange = new EventEmitter<string>(); // Note that the output is the same as the input but suffixed with "Change"

  updateValue(event: Event){

    let value = '';
    if (event && event.target && (event.target as HTMLInputElement).value) {
      value = (event.target as HTMLInputElement).value || '';
    }

    this.fieldToUpdate = value;
    this.fieldToUpdateChange.emit(value);
  }

}
