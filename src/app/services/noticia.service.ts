import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  constructor(private _http:HttpClient) 
  {

  }

  public listNoticias(categoria:string):Observable<any>{

    // petición por get a esa url de un api rest
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'livescore6.p.rapidapi.com', 
        'X-RapidAPI-Key': '63ab052545mshc77be13de47585ep1d24d1jsnde0902e8bbef'
      })
    };
    return this._http.get("https://livescore6.p.rapidapi.com/news/list?category="+categoria, httpOptions);
  }
}
