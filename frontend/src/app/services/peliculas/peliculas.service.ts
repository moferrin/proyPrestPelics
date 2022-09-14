import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Peliculas } from 'src/app/models/peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  selectedPeliculas: Peliculas;
  peliculas!: Peliculas[];

  readonly URL_API = 'http://20.106.169.172:3000/peliculas';

  constructor(private http:HttpClient) {
    this.selectedPeliculas = new Peliculas();
   }

   getPeliculas(){
    return this.http.get(this.URL_API);
   }

   createPelicula(peliculas: Peliculas){
    return this.http.post(this.URL_API, peliculas);
   }

   editarPelicula(peliculas: Peliculas){
    return this.http.put(this.URL_API + `/${peliculas.id_pelicula}`, peliculas);
   }

   eliminarPelicula(id_pelicula: string){
    return this.http.delete(this.URL_API + `/${id_pelicula}`);
   }
}
