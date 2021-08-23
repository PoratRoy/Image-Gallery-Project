import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': environment.PHOTOS_PEXELS_API_AUTHO
  })
}

@Injectable({
  providedIn: 'root'
})
export class PexelImagesService {

  constructor(private _http:HttpClient) { }

  getData(search):Observable<any>{
    const url = "https://api.pexels.com/v1/search?query="+search+"&per_page=80"; 

    return this,this._http.get<any>(url,httpOptions);
  }

}
