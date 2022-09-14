import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Peliculas } from 'src/app/models/peliculas';
import { PeliculasService } from 'src/app/services/peliculas/peliculas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  categorias: string[];

  constructor(public peliculasService: PeliculasService) { 
    this.categorias = [
      'Comedia', 
      'Terror', 
      'Acción', 
      'Ciencia Ficción'];
  }

  ngOnInit(): void {
    this.getPeliculas();
  }

  getPeliculas(){
    this.peliculasService.getPeliculas().subscribe((res) => {
      this.peliculasService.peliculas = res as Peliculas[];
      console.log(res);
    });
  }

  createPelicula(form: NgForm){
    if(form.value.id_pelicula){
      this.peliculasService.editarPelicula(form.value).subscribe((res) => {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Registro actualizado',
          showConfirmButton: false,
          timer: 1500,
        });
        this.getPeliculas();
      }); 
    }else{
      this.peliculasService.createPelicula(form.value).subscribe((res) => {
        form.reset();
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Nuevo registro agregado',
          showConfirmButton: false,
          timer: 1500,
        });
        this.getPeliculas();
      });
    }
  }

  updatePelicula(peliculas: Peliculas){
    this.peliculasService.selectedPeliculas = peliculas;
    this.peliculasService.editarPelicula(peliculas);
  }

  eliminarPelicula(id_pelicula: string){
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Este registro se eliminará completamente',
      position: 'top',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, deseo eliminarlo!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.peliculasService.eliminarPelicula(id_pelicula).subscribe((res) => {
          Swal.fire('Eliminado!', 'Registro eliminado', 'success');
          this.getPeliculas();
        });
      }
    });
  }

 

}
