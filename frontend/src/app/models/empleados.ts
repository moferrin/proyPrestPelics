export class Empleados {
    constructor(id_empleado= '', nombreE= '', apellidoE= '', cedulaE= '', telefonoE= '', direccionE= ''){

        this.id_empleado=id_empleado;
        this.nombreE=nombreE;
        this.apellidoE=apellidoE;
        this.cedulaE=cedulaE;
        this.telefonoE=telefonoE;
        this.direccionE=direccionE;
      }
    
      id_empleado: string;
      nombreE: string;
      apellidoE: string;
      cedulaE: string;
      telefonoE: string;
      direccionE: string;
}
