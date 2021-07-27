import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../models/Image';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  _url ='http://localhost:5000/api/image/';
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

  getImageByCaptionAndCategory(query){
    return this._http.get<any>(this._url+'search',{ params: query})

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

}
