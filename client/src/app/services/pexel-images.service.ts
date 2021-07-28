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

  getData(search):Observable<any>{
    const url = "https://api.pexels.com/v1/search?query="+search+"&per_page=80"; //max per page = 80

    return this,this._http.get<any>(url,httpOptions);
  }

}
