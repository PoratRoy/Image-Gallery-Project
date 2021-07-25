import { Injectable, EventEmitter } from '@angular/core';
import { Image } from '../../models/Image';

@Injectable({
  providedIn: 'root'
})
export class TaggoleModalService {

  private showInfo:boolean = false;
  taggleModal: EventEmitter<boolean> = new EventEmitter<boolean>();
  imageModal: EventEmitter<Image> = new EventEmitter<Image>();

  constructor() { }

  taggle():void{
    this.showInfo = true;
    this.taggleModal.emit(this.showInfo);
  }

  setImage(image:Image):void{
    this.imageModal.emit(image);
  }
}
