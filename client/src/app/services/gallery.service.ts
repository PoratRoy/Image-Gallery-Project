import { Injectable } from '@angular/core';
import { Gallery } from '../models/gallery';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  _url ='http://localhost:5000/api/gallery/';

  constructor(private _http: HttpClient) { }

  getGallery():Promise<Gallery>{
    return new Promise(async (res,rej)=>{
      this._http.get<any>(this._url).subscribe((data)=>{
        console.log(res);
        res(data)
      })
    })
  }

  appendGallery(gallery:Gallery):Promise<Gallery>{
    return new Promise(async (res,rej)=>{
      this._http.post<any>(this._url+'append', gallery).subscribe((data)=>{
        res(data)
      })
    })
  }
}

