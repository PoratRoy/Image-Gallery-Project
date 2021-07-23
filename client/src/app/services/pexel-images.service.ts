import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization':'563492ad6f91700001000001fa79b73e188d44dfb4b55e76642ae62e'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PexelImagesService {

  constructor(private _http:HttpClient) { }

  getData(search,perPage):Observable<any>{
    console.log(search);
    console.log(perPage);
    
    const url = "https://api.pexels.com/v1/search?query="+search+"&per_page="+perPage;

    return this,this._http.get<any>(url,httpOptions);
  }

}
