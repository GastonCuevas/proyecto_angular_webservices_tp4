import { Component, OnInit } from '@angular/core';
import { Pasaje } from 'src/app/models/pasaje';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  venta: Pasaje;
  ventas: Array<Pasaje>;

  monto: number;
  valor: number=0;

  mostrar1: boolean=false;
  mostrar2: boolean=false;

  cantTotal: number=1;
  cantAdultos: number=0;
  cantMenores: number=1;
  cantJubilados: number=0;

  constructor(private ventaservice: VentasService) { 
    this.venta = new Pasaje();
    this.venta.fecha =  new Date(2020,2,20);
    this.venta.precio = 5000;
    this.venta.categoriapasajero = "m";
    this.venta.dnipasajero = "24504442";

    this.ventas = new Array<Pasaje>();
    this.ventaservice.registrarVenta(this.venta);

    this.listarVenta();

    this.venta = new Pasaje();
  }

  ngOnInit(): void {
  }

  public registrarVenta(){
    this.venta.fecha = new Date();
    this.ventaservice.registrarVenta(this.venta);

    if(this.venta.categoriapasajero == 'a'){
      this.cantAdultos ++;
    }else if(this.venta.categoriapasajero == 'm'){
      this.cantMenores ++;
    }else {
      this.cantJubilados ++;
    }

    this.monto = 0;
    this.venta = new Pasaje();
    this.mostrar1 = false;
  }

  public listarVenta(){
    this.ventas = this.ventaservice.listarVenta();
  }

  public limpiarVenta(){
    this.venta = new Pasaje();
    this.mostrar1 = false;
  }

  public calcularDescuento(){
    
    if(this.venta.categoriapasajero == 'm'){
      this.valor = (this.monto*25)/100;
      this.venta.precio = this.monto-this.valor;
      this.mostrar1 = true;
    }else if(this.venta.categoriapasajero == 'j'){
      this.valor = (this.monto*50)/100;
      this.venta.precio = this.monto-this.valor;
      this.mostrar1 = true;
    }else if(this.venta.categoriapasajero == 'a'){
      this.venta.precio = this.monto;
      this.mostrar1 = true;
    }else{
      this.mostrar1 = false;
    }
  }

  public mostrarPrecio(){
    if(this.monto!=0){
      this.mostrar2 = true;
    }else{
      this.mostrar2 = false;
    }

    this.calcularDescuento();
    
  }

}
