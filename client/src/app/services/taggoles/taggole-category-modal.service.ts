import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaggoleCategoryModalService {

  private showInfo:boolean = false;
  taggleModal: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  taggle():void{
    this.showInfo = true;
    this.taggleModal.emit(this.showInfo);
  }

}
