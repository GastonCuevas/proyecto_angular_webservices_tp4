import { Component, OnInit } from '@angular/core';
import { CovidDatos } from 'src/app/models/covid-datos';
import { CovidService } from 'src/app/services/covid.service';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {

  mostrar1: boolean=false;
  mostrar2: boolean=false;
  mostrar3: boolean=false;
  mostrar4: boolean=false;
  mostrar5: boolean=false;
  mostrarTabla: boolean=false;
  province: Array<any>;

  datos: CovidDatos;
  datosPais: Array<CovidDatos>;
  pais: string;
  fecha: Date;
  confirmados: boolean;
  curados: boolean;
  fallecidos: boolean;

  constructor(private covidService: CovidService) { 

    this.datos = new CovidDatos();
    this.datosPais = new Array<CovidDatos>();
    this.fecha = new Date();

  }

  ngOnInit(): void {
  }

  public cargarInfo(){

    this.mostrarTabla = true;

    if(this.pais=="argentina"){
      this.mostrar1 = true;
      this.mostrar2 = false;
      this.mostrar3 = false;
      this.mostrar4 = false;
      this.mostrar5 = false;
    }else if(this.pais=="spain"){
      this.mostrar1 = false;
      this.mostrar2 = true;
      this.mostrar3 = false;
      this.mostrar4 = false;
      this.mostrar5 = false;
    }else if(this.pais=="usa"){
      this.mostrar1 = false;
      this.mostrar2 = false;
      this.mostrar3 = true;
      this.mostrar4 = false;
      this.mostrar5 = false;
    }else if(this.pais=="germany"){
      this.mostrar1 = false;
      this.mostrar2 = false;
      this.mostrar3 = false;
      this.mostrar4 = true;
      this.mostrar5 = false;
    }else if(this.pais=="italy"){
      this.mostrar1 = false;
      this.mostrar2 = false;
      this.mostrar3 = false;
      this.mostrar4 = false;
      this.mostrar5 = true;
    }




    this.covidService.obtenerPais(this.pais,this.fecha.toString()).subscribe(
      (result) => {
        this.province = result;
        this.datosPais = new Array<CovidDatos>(); 
        this.province[0].provinces.forEach(element => {
          this.datos= new CovidDatos(); 
          Object.assign(this.datos,element);
          this.datosPais.push(this.datos);
        });
        console.log(this.datos);
    }, 
    error => { alert("Error en la petición"); }
    )

  }

}
