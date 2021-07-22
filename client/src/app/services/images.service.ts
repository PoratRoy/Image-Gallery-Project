import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Image } from '../models/Image';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  _url ='http://localhost:5000/changeImage';
  constructor(private _http: HttpClient) { }

  enroll(image:Image){
    return this._http.post<any>(this._url, image);
  }

}
