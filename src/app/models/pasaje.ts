export class Pasaje {

    dnipasajero: string;
    precio: number;
    categoriapasajero: string;
    fecha: Date;

    pasaje(dnipasajero?: string, precio?: number, categoriapasajero?: string, fecha?: Date){
        this.dnipasajero = dnipasajero;
        this.precio = precio;
        this.categoriapasajero = categoriapasajero;
        this.fecha = fecha;
    }

}
