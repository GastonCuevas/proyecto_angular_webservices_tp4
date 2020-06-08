import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private _http:HttpClient) { }

  public obtenerPais(pais:string,fecha:string):Observable<any>{

    // petición por post a esa url de un api rest
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'covid-19-data.p.rapidapi.com', 
        'X-RapidAPI-Key': '63ab052545mshc77be13de47585ep1d24d1jsnde0902e8bbef',
        'content-type': 'application/json',
        'useQueryString': 'true'
      }),
      params: {
        'name': pais,
        'date': fecha
      }
    };
    return this._http.get("https://covid-19-data.p.rapidapi.com/report/country/name", httpOptions);
  }
}
