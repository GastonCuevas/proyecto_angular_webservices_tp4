export class CovidDatos {
    province: string;
    confirmed: number;
    recovered: number;
    deaths: number;

    constructor(province?: string, confirmed?: number, recovered?: number, deaths?: number){
        this.province = province;
        this.confirmed = confirmed;
        this.recovered = recovered;
        this.deaths = deaths;
    }

}
