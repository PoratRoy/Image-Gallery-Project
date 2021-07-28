import { Injectable,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivateModeService {

  permission:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  enterPrivateMode(password:string ):boolean{

    if(password === 'popo'){
      this.permission.emit(true);
      return true;
    }else{
      return false;
    }
  }

}
