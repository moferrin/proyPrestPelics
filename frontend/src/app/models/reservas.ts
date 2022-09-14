export class Reservas {
    constructor(id_prestamo= '', id_cliente= '', id_pelicula= '', id_empleado= '', nombreP='', nombre='',nombreE='', fecha_salida= '', fecha_devolucion= ''){

        this.id_prestamo=id_prestamo;
        this.id_cliente=id_cliente;
        this.id_pelicula=id_pelicula;
        this.id_empleado=id_empleado;
        this.nombreP=nombreP;
        this.nombre=nombre;
        this.nombreE=nombreE;
        this.fecha_salida=fecha_salida;
        this.fecha_devolucion=fecha_devolucion;
      }
    
      id_prestamo: string;
      id_cliente: string;
      id_pelicula: string;
      id_empleado: string;
      nombreP: string;
      nombre: string;
      nombreE: string;
      fecha_salida: string;
      fecha_devolucion: string;
}
