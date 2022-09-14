import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { EmpleadosService } from 'src/app/services/empleados/empleados.service';
import { Empleados } from 'src/app/models/empleados';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  constructor(public empleadosService: EmpleadosService) { }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(){
    this.empleadosService.getEmpleados().subscribe((res) => {
      this.empleadosService.empleados = res as Empleados[];
      console.log(res);
    });
  }

  createEmpleado(form: NgForm){
    console.log(form.value);
    if(form.value.id_empleado){
      this.empleadosService.editarEmpleado(form.value).subscribe((res) => {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Registro actualizado',
          showConfirmButton: false,
          timer: 1500,
        });
        this.getEmpleados();
        console.log(res);
      }); 
    }else{
      this.empleadosService.createEmpleado(form.value).subscribe((res) => {
        form.reset();
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Nuevo registro agregado',
          showConfirmButton: false,
          timer: 1500,
        });
        this.getEmpleados();
      });
    }
  }

  updateEmpleado(empleados: Empleados){
    this.empleadosService.selectedEmpleados = empleados;
    this.empleadosService.editarEmpleado(empleados);
  }

  eliminarEmpleado(id_empleado: string){
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
        this.empleadosService.eliminarEmpleado(id_empleado).subscribe((res) => {
          Swal.fire('Eliminado!', 'Registro eliminado', 'success');
          this.getEmpleados();
        });
      }
    });
  }


}
