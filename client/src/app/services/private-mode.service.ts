import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrivateModeService {

  permission:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  enterPrivateMode(permission:string ) {
    if(permission === 'popo'){
      this.permission.emit(true);
    }else{
      this.permission.emit(false);
    }
  }

}
