import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Empleados } from 'src/app/models/empleados';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  selectedEmpleados: Empleados;
  empleados!: Empleados[];

  readonly URL_API = 'http://20.106.169.172:3000/empleados';

  constructor(private http:HttpClient) {
    this.selectedEmpleados = new Empleados();
   }

   getEmpleados(){
    return this.http.get(this.URL_API);
   }

   createEmpleado(empleados: Empleados){
    return this.http.post(this.URL_API, empleados);
   }

   editarEmpleado(empleados: Empleados){
    return this.http.put(this.URL_API + `/${empleados.id_empleado}`, empleados);
   }

   eliminarEmpleado(id_empleado: string){
    return this.http.delete(this.URL_API + `/${id_empleado}`);
   }

}
