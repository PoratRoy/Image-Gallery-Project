import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../models/Image';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  _url:string ='http://localhost:5000/api/image/';

  displayImages:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private _http: HttpClient) { }

  getAllImages(){
    return this._http.get<any>(this._url)
  }

  appendImage(image:Image){
    return this._http.post<any>(this._url+'append', image);
  }

  updateImage(image:Image){
    return this._http.put<any>(this._url+'update', image)
  }

  getImagesByCaption(query){
    return this._http.get<any>(this._url+'searchCaption',{ params: query})
  }

  getImagesByCategory(query){
    return this._http.get<any>(this._url+'searchCategory',{ params: query})
  }
  
  getImageByPrivate(){
    return this._http.get<any>(this._url+'byPrivate')
  }

  getImageByNoPrivate(){
    return this._http.get<any>(this._url+'byNoPrivate')
  }

  getImageByFavorite(){
    return this._http.get<any>(this._url+'byFavorite')
  }

  displayNoPrivateImages(){
    this.displayImages.emit(true);
  }

}
