import { Component, OnInit } from '@angular/core';
import { Noticia } from './../../models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {

  category: string;
  noticia: Noticia;
  noticias: Array<Noticia>;

  constructor(private noticiaService: NoticiaService) { 
    this.noticia = new Noticia();
    this.noticias = new Array<Noticia>();
  }

  ngOnInit(): void {
  }

  public cargarNoticias(){
    this.noticiaService.listNoticias(this.category).subscribe(
      (result) => {
        this.noticias = new Array<Noticia>(); 
        result['arts'].forEach(element => {
          this.noticia= new Noticia(); 
          Object.assign(this.noticia,element);
          this.noticias.push(this.noticia);
        });
        console.log(this.noticias);
    }, 
    error => { alert("Error en la petición"); }
    )

  }
}
