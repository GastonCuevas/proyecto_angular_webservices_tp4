export class Asistente {
    usuario: string;
    nombreOrganizacion: string;
    requiereConstancia: string;

    Asistente( usuario?: string, nombreOrganizacion?: string, requiereConstancia?: string ){
        this.usuario = usuario;
        this.nombreOrganizacion = nombreOrganizacion;
        this.requiereConstancia = requiereConstancia;
    }

}
