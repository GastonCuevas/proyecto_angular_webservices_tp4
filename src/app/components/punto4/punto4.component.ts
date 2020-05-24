import { Component, OnInit } from '@angular/core';
import { AnimalesService } from 'src/app/services/animales.service';

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {

  animales: Array<any>;

  mostrar1: boolean=false;
  mostrar2: boolean=false;
  mostrar3: boolean=false;
  mostrar4: boolean=false;
  mostrar5: boolean=false;
  iterador: number=0;
  nombreEsp: string;
  nombreIng: string;
  id: number;
  imagen: string;
  vidas: number=6;
  puntaje: number=0;
  palabra: string;

  constructor(private animalesservice: AnimalesService) { 

    this.animales = new Array<any>();

  }

  ngOnInit(): void {
  }

  obtenerAnimales(){

    const animal = this.animalesservice.obtenerAnimales();
    this.nombreEsp = animal[this.iterador].nombreEsp;
    this.nombreIng = animal[this.iterador].nombreIng;
    this.imagen = animal[this.iterador].imagen;
    this.id = animal[this.iterador].id;

  }

  iniciarJuego(){
    this.palabra = "";
    this.mostrar1 = true;
    this.mostrar2 = false;
    this.mostrar3 = false;
    this.mostrar4 = false;
    this.mostrar5 = false;
    this.iterador = 0;
    this.puntaje = 0;
    this.vidas = 6;
    this.obtenerAnimales();
  }

  comprobar(){
    const animal = this.animalesservice.obtenerAnimales();

    if(this.palabra == this.nombreIng){
      this.mostrar1 = false;
      this.puntaje ++;
      this.iterador ++;
      
      if(this.iterador == 10){
        this.mostrar5 = true;
      }else{
        this.mostrar2=true;
      }
    }else{
      this.mostrar1 = false;
      this.vidas --;
      this.iterador ++;
      this.mostrar3=true;
      if(this.vidas==0){
        this.mostrar1 = false;
        this.mostrar3 = false;
        this.mostrar4 = true;
      }
      else if(this.iterador == 10){
        this.mostrar1 = false;
        this.mostrar3 = false;
        this.mostrar5 = true;
      }
    }
  }

  continuar(){
    this.palabra = "";
    this.mostrar1 = true;
    this.mostrar2 = false;
    this.mostrar3 = false;
    this.obtenerAnimales();
  }

}
