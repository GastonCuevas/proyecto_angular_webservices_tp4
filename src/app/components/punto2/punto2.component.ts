import { Component, OnInit } from '@angular/core';
import { Asistente } from './../../models/asistente';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  asistente: Asistente;
  constancia: boolean = false;
  asistentes: Array<Asistente>;

  constructor() { 
    this.asistente = new Asistente();
    this.asistente.usuario = "usuario@ejemplo.ar";
    this.asistente.nombreOrganizacion = "Organización Unju";
    this.asistente.requiereConstancia = "Si";
  
    this.asistentes = new Array<Asistente>();
    this.asistentes.push(this.asistente);

    this.asistente = new Asistente();
  }

  ngOnInit(): void {
  }

  public agregarAsistente(){

    if(this.constancia == true){
      this.asistente.requiereConstancia = "Si";
    }else{
      this.asistente.requiereConstancia = "No";
    }

    this.asistentes.push(this.asistente);
    this.asistente = new Asistente();
    this.constancia = false;
  }
}
