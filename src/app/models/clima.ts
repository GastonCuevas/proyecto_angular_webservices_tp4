export class Clima {

    lon: number;
    lat: number;
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;

    constructor(lon?:number,lat?:number,temp?:number,feels_like?:number,temp_min?:number,temp_max?:number){
        this.lon = lon;
        this.lat = lat;
        this.temp = temp;
        this.feels_like = feels_like;
        this.temp_min = temp_min;
        this.temp_max = temp_max;
    }
}
