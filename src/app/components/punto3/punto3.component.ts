import { Component, OnInit } from '@angular/core';
import { Zodiaco } from 'src/app/models/zodiaco';
import { HoroscopoService } from 'src/app/services/horoscopo.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {

  zodiaco: Zodiaco;
  signo: string;
  fecha: Date;
  mostrar1: boolean=true;
  mostrar2: boolean=false;
  mostrar3: boolean=true;

  img1: boolean = false;
  img2: boolean = false;
  img3: boolean = false;
  img4: boolean = false;
  img5: boolean = false;
  img6: boolean = false;
  img7: boolean = false;
  img8: boolean = false;
  img9: boolean = false;
  img10: boolean = false;
  img11: boolean = false;
  img12: boolean = false;


  constructor(private horoscopoService: HoroscopoService) { 
    this.zodiaco = new Zodiaco();
    
    this.fecha = new Date();
  }

  ngOnInit(): void {
  }

  public mostrarSigno(letra: string){

    this.mostrar1 = false;
    this.mostrar2 = true;
    this.mostrar3 = false;

    if(letra == 'i'){
      this.signo = "aries";
      this.img1 = true;
    }else if(letra == 'y'){
      this.signo = "leo";
      this.img2 = true;
    }else if(letra == 's'){
      this.signo = "sagittarius";
      this.img3 = true;
    }
    else if(letra == 't'){
      this.signo = "taurus";
      this.img4 = true;
    }
    else if(letra == 'v'){
      this.signo = "virgo";
      this.img5 = true;
    }
    else if(letra == 'u'){
      this.signo = "capricorn";
      this.img6 = true;
    }
    else if(letra == 'g'){
      this.signo = "gemini";
      this.img7 = true;
    }else if(letra == 'l'){
      this.signo = "libra";
      this.img8 = true;
    }else if(letra == 'a'){
      this.signo = "aquarius";
      this.img9 = true;
    }
    else if(letra == 'c'){
      this.signo = "cancer";
      this.img10 = true;
    }
    else if(letra == 'e'){
      this.signo = "scorpio";
      this.img11 = true;
    }else if(letra == 'p'){
      this.signo = "pisces";
      this.img12 = true;
    }        


    this.horoscopoService.obtenerSigno(this.signo,this.fecha.toString()).subscribe(
      (result) => {
        this.zodiaco = result['result'];
        console.log(this.zodiaco);
    }, 
    error => { alert("Error en la petición"); }
    )
    
  }

  public regresar(){
    this.zodiaco.description = "";
    this.mostrar1 = true;
    this.mostrar2 = false;
    this.mostrar3 = true;
    this.img1 = false;
    this.img2 = false;
    this.img3 = false;
    this.img4 = false;
    this.img5 = false;
    this.img6 = false;
    this.img7 = false;
    this.img8 = false;
    this.img9 = false;
    this.img10 = false;
    this.img11 = false;
    this.img12 = false;
  }

}
