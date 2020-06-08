import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'; 



@Injectable({
  providedIn: 'root'
})
export class NbaService {

  constructor(private _http:HttpClient) 
  {

    
  }

  public getTeams():Observable<any>{

    // petición por get a esa url de un api rest
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host':  'free-nba.p.rapidapi.com', 
        'X-RapidAPI-Key': '63ab052545mshc77be13de47585ep1d24d1jsnde0902e8bbef'
      })
    };
    return this._http.get("https://free-nba.p.rapidapi.com/teams", httpOptions);
  }
}
