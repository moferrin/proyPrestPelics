export class Clientes {
    constructor(id_cliente= '', nombre= '', apellido= '', cedula= '', telefono= '', direccion= ''){

        this.id_cliente=id_cliente;
        this.nombre=nombre;
        this.apellido=apellido;
        this.cedula=cedula;
        this.telefono=telefono;
        this.direccion=direccion;
      }
    
      id_cliente: string;
      nombre: string;
      apellido: string;
      cedula: string;
      telefono: string;
      direccion: string;
}
