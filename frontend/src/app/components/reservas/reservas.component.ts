import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Reservas } from 'src/app/models/reservas';
import { ReservasService } from 'src/app/services/reservas/reservas.service';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { PeliculasService } from 'src/app/services/peliculas/peliculas.service';
import {EmpleadosService} from 'src/app/services/empleados/empleados.service';
import { Clientes } from 'src/app/models/clientes';
import { Peliculas } from 'src/app/models/peliculas';
import { Empleados } from 'src/app/models/empleados';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  clientes!: Clientes[];
  peliculas!: Peliculas[];
  empleados!: Empleados[];
  Date!: Date;

  constructor(public reservasService: ReservasService, public clientesService: ClientesService, public peliculasService: PeliculasService, public empleadosService: EmpleadosService) { 
    
  }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(res => {
      this.clientes = res as Clientes[];
    });
    this.peliculasService.getPeliculas().subscribe(res => {
      this.peliculas = res as Peliculas[];
      });
    this.empleadosService.getEmpleados().subscribe(res => {
      this.empleados = res as Empleados[];
    });
    this.getReservas();
  }

  getReservas(){
    this.reservasService.getReservas().subscribe((res) => {
      this.reservasService.reservas = res as Reservas[];
      console.log(res);
    });
  }

  createReserva(form: NgForm){
    console.log(form.value);
    if(form.value.id_prestamo){
      this.reservasService.editarReservas(form.value).subscribe((res) => {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Registro actualizado',
          showConfirmButton: false,
          timer: 1500,
        });
        this.getReservas();
      }); 
    }else{
      this.reservasService.createReservas(form.value).subscribe((res) => {
        form.reset();
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Nuevo registro agregado',
          showConfirmButton: false,
          timer: 1500,
        });
        this.getReservas();
      });
    }
  }

  updateReserva(Reservas: Reservas){
    this.reservasService.selectedReservas = Reservas;
    this.reservasService.editarReservas(Reservas);
  }

  eliminarReserva(id_prestamo: string){
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
        this.reservasService.eliminarReservas(id_prestamo).subscribe((res) => {
          console.log('Elimino esto: ' + id_prestamo);
          Swal.fire('Eliminado!', 'Registro eliminado', 'success');
          this.getReservas();
        });
      }
    });
  }

}
