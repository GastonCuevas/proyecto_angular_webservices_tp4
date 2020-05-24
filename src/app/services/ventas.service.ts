import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  ventas: Array<Pasaje>;

  constructor() {
      this.ventas = new Array<Pasaje>();
   }

  listarVenta(){
    return this.ventas
  }

  registrarVenta(venta: Pasaje){
    this.ventas.push(venta);
  }
}
