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

  getAllImages():Promise<Image[]>{
    return new Promise(async (res,rej)=>{
      this._http.get<any>(this._url).subscribe((data)=>{
        res(data)
      })
    })
  }

  appendImage(image:Image):Promise<Image[]>{
    return new Promise(async (res,rej)=>{
      this._http.post<any>(this._url+'append', image).subscribe((data)=>{
        res(data)
      })
    })
  }

  updateImage(image:Image):Promise<Image[]>{
    return new Promise(async (res,rej)=>{
      this._http.put<any>(this._url+'update', image).subscribe((data)=>{
        res(data)
      })
    })
  }


  getImagesByCaption(query):Promise<Image[]>{
    return new Promise(async (res,rej)=>{
      this._http.get<any>(this._url+'searchCaption',{ params: query}).subscribe((data)=>{
        res(data)
      })
    })
  }

  getImagesByCategory(query):Promise<Image[]>{
    return new Promise(async (res,rej)=>{
      this._http.get<any>(this._url+'searchCategory',{ params: query}).subscribe((data)=>{
        res(data)
      })
    })
  }
  
  getImageByPrivate():Promise<Image[]>{
    return new Promise(async (res,rej)=>{
      this._http.get<any>(this._url+'byPrivate').subscribe((data)=>{
        res(data)
      })
    })
  }

  getImageByNoPrivate():Promise<Image[]>{
    return new Promise(async (res,rej)=>{
      this._http.get<any>(this._url+'byNoPrivate').subscribe((data)=>{
        res(data)
      })
    })
  }

  getImageByFavorite():Promise<Image[]>{
    return new Promise(async (res,rej)=>{
      this._http.get<any>(this._url+'byFavorite').subscribe((data)=>{
        res(data)
      })
    })
  }

  displayNoPrivateImages(){
    this.displayImages.emit(true);
  }

}
