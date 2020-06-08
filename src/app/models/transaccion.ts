export class Transaccion {
    result: string;
    to_type: string;
    from_value: string;
    from_type: string;

    transaccion(result?:string,to_type?:string,from_value?:string,from_type?:string){
        this.result = result;
        this.to_type = to_type;
        this.from_value = from_value;
        this.from_type = from_type;
    }
}
