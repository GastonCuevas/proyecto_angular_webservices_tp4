import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private _http:HttpClient) { }

  public obtenerSigno(signo:string,fecha:string,):Observable<any>{

    // petición por post a esa url de un api rest
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'horoscope5.p.rapidapi.com', 
        'X-RapidAPI-Key': '63ab052545mshc77be13de47585ep1d24d1jsnde0902e8bbef',
        'content-type': 'application/json',
        'useQueryString': 'true'
      }),
      params: {
        'sign': signo,
        'date': fecha
      }
    };
    return this._http.get("https://horoscope5.p.rapidapi.com/general/daily", httpOptions);
  }
}
