import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private _http:HttpClient) 
  { }

  public obtenerMoneda(from_type:string,to_type:string,from_value:string):Observable<any>{

    // petición por post a esa url de un api rest
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'community-neutrino-currency-conversion.p.rapidapi.com', 
        'X-RapidAPI-Key': '63ab052545mshc77be13de47585ep1d24d1jsnde0902e8bbef',
        'content-type': 'application/x-www-form-urlencoded',
        'useQueryString': 'true'
      }),
      params: {
        'from-type': from_type,
        'to-type': to_type,
        'from-value': from_value
      }
    };
    return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert", { 'from-type': from_type,'to-type': to_type, 'from-value': from_value }, httpOptions);
  }
}
