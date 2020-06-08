import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

  constructor(private _http:HttpClient) { }

  public obtenerClima(latitud:string,longitud:string):Observable<any>{

    // petición por post a esa url de un api rest
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'covid-19-data.p.rapidapi.com', 
        'X-RapidAPI-Key': '63ab052545mshc77be13de47585ep1d24d1jsnde0902e8bbef',
        'content-type': 'application/json',
        'useQueryString': 'true'
      }),
      params: {
        'lat': latitud,
        'lon': longitud,
        'lang': "sp",
        'units': "metric"
      }
    };
    return this._http.get("https://community-open-weather-map.p.rapidapi.com/weather", httpOptions);
  }
}
