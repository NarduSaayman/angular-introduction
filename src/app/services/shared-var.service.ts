import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedVarService {

  private _gerraraHere = '';

  constructor() { 
    this._gerraraHere = 'For Real';
  }

  get actor() {
    return this._gerraraHere;
  }

  set actor(newActor: string) {
    if (newActor.length > 0) {
      this._gerraraHere = newActor;
    }
  }
}
