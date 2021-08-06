import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  _url ='http://localhost:5000/api/category/';
  constructor(private _http: HttpClient) { }

  getAllCategories():Promise<string[]>{
    return new Promise(async (res,rej)=>{
      this._http.get<any>(this._url).subscribe((data)=>{
        res(data)
      })
    })
  }

  appendCategory(category:string):Promise<string>{
    return new Promise(async (res,rej)=>{
      this._http.post<any>(this._url+'append', {categories:category}).subscribe((data)=>{
        res(data)
      })
    })
  }
}


