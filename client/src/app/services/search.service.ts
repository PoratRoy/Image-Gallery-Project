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
  

  getImagesByCaption= async(query:any)=>{
    try{
      const data = await this._images.getImagesByCaption(query);
      this.filterImages.emit(data)
    }catch(err){
      console.log(err);
    }
  }

  getImagesByCategory= async(query:any)=>{
    try{
      const data = await this._images.getImagesByCategory(query);
      this.filterImages.emit(data)
    }catch(err){
      console.log(err);
    }
  }


}
