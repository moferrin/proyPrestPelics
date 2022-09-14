import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Reservas } from 'src/app/models/reservas';
@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  selectedReservas: Reservas;
  reservas!: Reservas[];

  readonly URL_API = 'http://20.106.169.172:3000/reservas';

  constructor(private http:HttpClient) {
    this.selectedReservas = new Reservas();
   }

   getReservas(){
    return this.http.get(this.URL_API);
   }

   createReservas(Reservas: Reservas){
    return this.http.post(this.URL_API, Reservas);
   }

   editarReservas(Reservas: Reservas){
    return this.http.put(this.URL_API + `/${Reservas.id_prestamo}`, Reservas);
   }

   eliminarReservas(id_prestamo: string){
    return this.http.delete(this.URL_API + `/${id_prestamo}`);
   }
}
