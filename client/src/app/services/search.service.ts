import { Injectable,EventEmitter } from '@angular/core';
import { ImagesService } from './images.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  filterImages:EventEmitter<any> = new EventEmitter<any>();
  
  nullCaptionSearch:EventEmitter<string> = new EventEmitter<string>();
  nullCategorySelect:EventEmitter<string> = new EventEmitter<string>();


  
  permissionToPrivate: boolean = false;
  category:string = '';
  caption:string = '';


  constructor(private _images : ImagesService) { }

  havePermission(permission:boolean){
    this.permissionToPrivate = permission;
  }


  searchByText(value){
    if(this.permissionToPrivate){
      this.getImagesByCaption({caption:value, private: true})
    } else{
      this.getImagesByCaption({caption:value, private: false})
    }
    this.nullCategorySelect.emit('');
  }
  
  searchByCategory(value){
    if(this.permissionToPrivate){
      this.getImagesByCategory({categories:value, private: true})
    } else{
      this.getImagesByCategory({categories:value, private: false})
    }
    this.nullCaptionSearch.emit('');
  }
  

  getImagesByCaption(query:any){
    this._images.getImagesByCaption(query)
    .subscribe(
      data => {this.filterImages.emit(data)},
      error => console.log(error)
    );
  }

  getImagesByCategory(query:any){
    this._images.getImagesByCategory(query)
    .subscribe(
      data => {this.filterImages.emit(data)},
      error => console.log(error)
    );
  }


}
