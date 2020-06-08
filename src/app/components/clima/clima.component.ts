import { Component, OnInit } from '@angular/core';
import { Clima } from './../../models/clima';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  latitud: string;
  longitud: string;
  temperatura: string;
  tempAmbiente: string;
  minima: string;
  maxima: string;
  ciudad: string;

  clima: Clima;

  constructor(private climaService: ClimaService) {
    this.clima = new Clima();


   }

  ngOnInit(): void {
  }

  public cargarClima(){

    if(this.ciudad == "buenosAires"){

    }

    this.climaService.obtenerClima(this.latitud,this.longitud).subscribe(
      (result) => {
          this.clima= new Clima(); 
          this.clima = result;
          console.log(this.clima);
        },
    error => { alert("Error en la petición"); }
    )

  }

}
