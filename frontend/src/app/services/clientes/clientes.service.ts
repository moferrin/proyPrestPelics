import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Clientes } from 'src/app/models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  selectedClientes: Clientes;
  clientes!: Clientes[];

  readonly URL_API = 'http://20.106.169.172:3000/clientes';

  constructor(private http:HttpClient) {
    this.selectedClientes = new Clientes();
   }

   getClientes(){
    return this.http.get(this.URL_API);
   }

   createCliente(Clientes: Clientes){
    return this.http.post(this.URL_API, Clientes);
   }

   editarCliente(Clientes: Clientes){
    return this.http.put(this.URL_API + `/${Clientes.id_cliente}`, Clientes);
   }

   eliminarCliente(id_cliente: string){
    return this.http.delete(this.URL_API + `/${id_cliente}`);
   }

}
