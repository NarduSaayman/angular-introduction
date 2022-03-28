import { Injectable } from '@angular/core';

export interface User {
  name: string,
  isAuthorised: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class SharedVarService {

  private _gerraraHere = '';

  user: User = {
    name: 'Tim',
    isAuthorised: true
  }

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
