import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  _url ='http://localhost:5000/api/category/';
  constructor(private _http: HttpClient) { }

  getAllCategories(){
    return this._http.get<any>(this._url)
  }

  appendCategory(category:string){
    return this._http.post<any>(this._url+'append', {categories:category}).subscribe((res)=>{});
  }
}


