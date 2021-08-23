import { Injectable,EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrivateModeService {

  permissionAccess:boolean = false;
  permission:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  enterPrivateMode(password:string ):boolean{

    if(password === environment.PRIVATE_MODE_PASSWORD){
      this.permissionAccess = true;
      this.permission.emit(true);
      return true;
    }else{
      this.permissionAccess = false;
      return false;
    }
  }

  requestPermissionAccess():boolean{
    console.log(this.permissionAccess);
    
    return this.permissionAccess;
  }

}
