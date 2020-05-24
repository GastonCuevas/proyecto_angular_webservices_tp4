import { Component, OnInit } from '@angular/core';
import { Mensaje } from './../../models/mensaje';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  mensaje: Mensaje;
  tamMaxTexto: number = 50;
  tamTexto: number;

  mensajes: Array<Mensaje>;

  constructor() {
    this.mensaje = new Mensaje();
    this.mensaje.desde = 3884373832;
    this.mensaje.para = 3885717372;
    this.mensaje.texto = "Hola, ¿Cómo estas?";
    this.mensaje.fecha = new Date(2020,3,15);

    this.mensajes = new Array<Mensaje>();
    this.mensajes.push(this.mensaje);

    this.mensaje = new Mensaje();
  }

  ngOnInit(): void {
  }

  public cambiarTamTexto(){
    this.tamTexto = this.mensaje.texto.length;
    console.log(this.tamTexto);
  }

  public enviarMensaje(){
    this.mensaje.fecha = new Date();
    this.mensajes.push(this.mensaje);
    this.mensaje = new Mensaje();
    this.tamTexto = 0;
  }

  public limpiarMensaje(){
    this.mensaje.fecha = new Date();
    this.mensaje = new Mensaje();
    this.tamTexto = 0;
  }
}
