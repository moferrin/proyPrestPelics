import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { ClientesService} from 'src/app/services/clientes/clientes.service';
import { Clientes } from 'src/app/models/clientes';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  constructor(public clientesService: ClientesService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(){
    this.clientesService.getClientes().subscribe((res) => {
      this.clientesService.clientes = res as Clientes[];
      console.log(res);
    });
  }

  createCliente(form: NgForm){
    if(form.value.id_cliente){
      this.clientesService.editarCliente(form.value).subscribe((res) => {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Registro actualizado',
          showConfirmButton: false,
          timer: 1500,
        });
        this.getClientes();
      }); 
    }else{
      this.clientesService.createCliente(form.value).subscribe((res) => {
        form.reset();
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Nuevo registro agregado',
          showConfirmButton: false,
          timer: 1500,
        });
        this.getClientes();
      });
    }
  }

  updateCliente(Clientes: Clientes){
    this.clientesService.selectedClientes = Clientes;
    this.clientesService.editarCliente(Clientes);
  }

  eliminarCliente(id_cliente: string){
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
        console.log('Elimino esto: ' + id_cliente);
        this.clientesService.eliminarCliente(id_cliente).subscribe((res) => {
          Swal.fire('Eliminado!', 'Registro eliminado', 'success');
          this.getClientes();
        });
      }
    });
  }

}
