import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  animales: Array<any>;

  constructor() {

    this.animales = [
      {
        "nombreEsp": "Gallina",
        "nombreIng": "chicken",
        "imagen": "../../../assets/Imagenes/animales/chicken.jpg",
        "id": 1
      },
      {
        "nombreEsp": "Vaca",
        "nombreIng": "cow",
        "imagen": "../../../assets/Imagenes/animales/cow.jpg",
        "id": 2
      },
      {
        "nombreEsp": "Cerdo",
        "nombreIng": "pig",
        "imagen": "../../../assets/Imagenes/animales/pig.jpg",
        "id": 3
      },
      {
        "nombreEsp": "Perro",
        "nombreIng": "dog",
        "imagen": "../../../assets/Imagenes/animales/dog.jpg",
        "id": 4
      },
      {
        "nombreEsp": "Gato",
        "nombreIng": "cat",
        "imagen": "../../../assets/Imagenes/animales/cat.jpg",
        "id": 5
      },
      {
        "nombreEsp": "Pez",
        "nombreIng": "fish",
        "imagen": "../../../assets/Imagenes/animales/fish.jpg",
        "id": 6
      },
      {
        "nombreEsp": "Caballo",
        "nombreIng": "horse",
        "imagen": "../../../assets/Imagenes/animales/horse.jpg",
        "id": 7
      },
      {
        "nombreEsp": "Leon",
        "nombreIng": "lion",
        "imagen": "../../../assets/Imagenes/animales/lion.jpg",
        "id": 8
      },
      {
        "nombreEsp": "Tigre",
        "nombreIng": "tiger",
        "imagen": "../../../assets/Imagenes/animales/tiger.jpg",
        "id": 9
      },
      {
        "nombreEsp": "Mono",
        "nombreIng": "monkey",
        "imagen": "../../../assets/Imagenes/animales/monkey.jpg",
        "id": 10
      },
    ]

   }

   obtenerAnimales(){
     return this.animales;
   }
}
