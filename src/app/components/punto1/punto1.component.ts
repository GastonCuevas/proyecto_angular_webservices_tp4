import { Component, OnInit } from '@angular/core';
import { TransaccionService } from 'src/app/services/transaccion.service';
import { Transaccion } from './../../models/transaccion';


@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  transaccion: Transaccion;
  transaccionConvert: Transaccion;

  monto: string = "1";
  ars: string = "ARS";

  convUSDaARS: string;
  convARSaUSD: string;
  convUEaARS: string;
  convARSaUE: string;
  convUKaARS: string;
  convARSaUK: string;
  convRUBaARS: string;
  convARSaRUB: string;
  moneda: string;

  constructor(private transaccionService: TransaccionService) {
    this.transaccion = new Transaccion();
    this.transaccionConvert = new Transaccion();

    this.moneda = "USD";
    this.convertidorARS(this.moneda);
    this.convertidorToARS(this.moneda);

    this.moneda = "EUR";
    this.convertidorARS(this.moneda);
    this.convertidorToARS(this.moneda);

    this.moneda = "GBP";
    this.convertidorARS(this.moneda);
    this.convertidorToARS(this.moneda);

    this.moneda = "RUB";
    this.convertidorARS(this.moneda);
    this.convertidorToARS(this.moneda);

    this.transaccion = new Transaccion();

  }

  ngOnInit(): void {
  }

  public convertir(){

    this.transaccionService.obtenerMoneda(this.transaccionConvert.from_type,this.transaccionConvert.to_type,this.transaccionConvert.from_value).subscribe(
      (result) => {
        this.transaccionConvert = result;
        console.log(this.transaccionConvert);
      },
      error => { alert ("Error en la petición"); }
    )

  }

  public convertidorARS(moneda:string){

    this.transaccion = new Transaccion();

    this.transaccionService.obtenerMoneda(this.ars,moneda,this.monto).subscribe(
      (result) => {
        this.transaccion = result;
        console.log(this.transaccion);
        if(moneda == "USD"){
          this.convARSaUSD = this.transaccion.result;
        }else if(moneda == "EUR"){
          this.convARSaUE = this.transaccion.result;
        }else if(moneda == "GBP"){
          this.convARSaUK = this.transaccion.result;
        }else if(moneda == "RUB"){
          this.convARSaRUB = this.transaccion.result;
        }
      },
      error => { alert ("Error en la petición"); }
    )

    this.transaccion = new Transaccion();

  }

  public convertidorToARS(moneda:string){

    this.transaccion = new Transaccion();

    this.transaccionService.obtenerMoneda(moneda,this.ars,this.monto).subscribe(
      (result) => {
        this.transaccion = result;
        console.log(this.transaccion);
        if(moneda == "USD"){
          this.convUSDaARS = this.transaccion.result;
        }else if(moneda == "EUR"){
          this.convUEaARS = this.transaccion.result;
        }else if(moneda == "GBP"){
          this.convUKaARS = this.transaccion.result;
        }else if(moneda == "RUB"){
          this.convRUBaARS = this.transaccion.result;
        }
      },
      error => { alert ("Error en la petición"); }
    )

    this.transaccion = new Transaccion();

  }
  
}
