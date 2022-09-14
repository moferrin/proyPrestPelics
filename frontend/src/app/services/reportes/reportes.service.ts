import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  readonly URL_API = 'http://20.106.169.172:3000/';

  constructor(private http:HttpClient) { }

  getReporte1(dato: any){
    return this.http.post(this.URL_API+'clientesCiudad',dato);
  }

  getReporte2(dato: any){
    return this.http.get(this.URL_API+'reservasAnio/'+dato);
  }

  getReporte3(dato: any){
    return this.http.post(this.URL_API+'categoriasByCiudad/',dato);
  }

  getReporte4(dato: any){
    return this.http.get(this.URL_API+'categoriasByAnio/'+dato);
  }
  
  getReporte5(dato: any){
    return this.http.post(this.URL_API+'clientesPeliculasFecha/',dato);
  }
}
