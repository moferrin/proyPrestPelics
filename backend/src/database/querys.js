export const querys = {
    getAllPeliculas: 'SELECT * FROM PELICULAS',
    createPeliculas: 'INSERT INTO PELICULAS (nombreP, categoria) VALUES (@nombreP, @categoria)',
    getPeliculasById: 'SELECT * FROM PELICULAS WHERE id_pelicula=@Id',
    deletePeliculas: 'DELETE FROM PELICULAS WHERE id_pelicula=@Id',
    getTotalPeliculas: 'SELECT COUNT(*) FROM PELICULAS',
    updatePeliculas: 'UPDATE PELICULAS SET nombreP = @nombreP, categoria = @categoria WHERE id_pelicula = @Id',

    getAllClientes: 'SELECT * FROM CLIENTES',
    createClientes: 'INSERT INTO CLIENTES (nombre, apellido, cedula, telefono, direccion) VALUES (@nombre, @apellido, @cedula, @telefono, @direccion)',
    getClientesById: 'SELECT * FROM CLIENTES WHERE id_cliente=@Id',
    deleteClientes: 'DELETE FROM CLIENTES WHERE id_cliente=@Id',
    getTotalClientes: 'SELECT COUNT(*) FROM CLIENTES',
    updateClientes: 'UPDATE CLIENTES SET nombre = @nombre, apellido = @apellido, cedula = @cedula, telefono = @telefono, direccion = @direccion WHERE id_cliente = @Id',

    getAllReservas: 'SELECT r.id_prestamo, r.id_cliente, r.id_pelicula, e.id_empleado, e.nombreE, c.nombre, p.nombreP, r.fecha_salida, r.fecha_devolucion FROM RESERVAS r INNER JOIN CLIENTES c on c.id_cliente=r.id_cliente INNER JOIN PELICULAS p ON p.id_pelicula=r.id_pelicula INNER JOIN EMPLEADOS e ON e.id_empleado=r.id_empleado',
    createReservas: 'INSERT INTO RESERVAS (id_cliente, id_pelicula, id_empleado, fecha_salida, fecha_devolucion) VALUES (@id_cliente, @id_pelicula, @id_empleado, @fecha_salida, @fecha_devolucion)',
    getReservasById: 'SELECT * FROM RESERVAS WHERE id_prestamo=@Id',
    deleteReservas: 'DELETE FROM RESERVAS WHERE id_prestamo=@Id',
    getTotalReservas: 'SELECT COUNT(*) FROM RESERVAS',
    updateReservas: 'UPDATE RESERVAS SET id_cliente = @id_cliente, id_pelicula = @id_pelicula, fecha_salida = @fecha_salida, fecha_devolucion = @fecha_devolucion WHERE id_prestamo = @Id',

    getAllEmpleados: 'SELECT * FROM EMPLEADOS',
    createEmpleados: 'INSERT INTO EMPLEADOS (nombreE, apellidoE, cedulaE, telefonoE, direccionE) VALUES (@nombreE, @apellidoE, @cedulaE, @telefonoE, @direccionE)',
    updateEmpleados: 'UPDATE EMPLEADOS SET nombreE = @nombreE, apellidoE = @apellidoE, cedulaE = @cedulaE, telefonoE = @telefonoE, direccionE = @direccionE WHERE id_empleado = @Id',
    getEmpleadosById: 'SELECT * FROM EMPLEADOS WHERE id_empleado=@Id',
    getTotalEmpleados: 'SELECT COUNT(*) FROM EMPLEADOS',
    deleteEmpleados: 'DELETE FROM EMPLEADOS WHERE id_empleado=@Id',

    //avanzadas
    //Obtiene todos los clientes que pertenezcan a una ciudad
    getClientesCiudad: "SELECT * FROM CLIENTES WHERE direccion LIKE '%'+@ciudad+'%' ",
    //obtiene todas las peliclas rentadas de todas las peliculas
    getClientesPelicuas: "SELECT cli.nombre, cli.apellido, pel.nombreP, re.fecha_salida, re.fecha_devolucion "+
    "FROM CLIENTES cli "+
    "inner join RESERVAS re on re.id_cliente = cli.id_cliente "+
    "inner join PELICULAS pel on pel.id_pelicula = re.id_pelicula "+
    "ORDER BY (cli.nombre)",
    //obtner las peliculas por año, nombre y apellido de cliente
    getClienteFechas:"SELECT cli.nombre, cli.apellido, pel.nombreP, re.fecha_salida, re.fecha_devolucion "+
    "FROM CLIENTES cli "+
    "inner join RESERVAS re on re.id_cliente = cli.id_cliente "+
    "inner join PELICULAS pel on pel.id_pelicula = re.id_pelicula "+
    "WHERE YEAR(re.fecha_salida) = @anio "+
    "AND cli.nombre LIKE '%'+@nombre+'%'"+
    "AND cli.apellido LIKE '%'+@apellido+'%'",

    //obtiene todas las pelicylas que un empleado ha rentado
    getEmpleadosPelicuas: "SELECT emp.nombre, emp.apellido, pel.nombreP, re.fecha_salida, re.fecha_devolucion "+
    "FROM EMPLEADOS emp "+
    "inner join RESERVAS re on re.id_cliente = emp.id_empleado "+
    "inner join PELICULAS pel on pel.id_pelicula = re.id_pelicula "+
    "ORDER BY (emp.nombre)",
    ///obtner las peliculas por año, nombre y apellido de empleado
    getEmpleadoPeliculasAnio:"SELECT emp.nombre, emp.apellido, pel.nombreP, re.fecha_salida, re.fecha_devolucion "+
    "FROM EMPLEADOS emp "+
    "inner join RESERVAS re on re.id_cliente = emp.id_empleado "+
    "inner join PELICULAS pel on pel.id_pelicula = re.id_pelicula "+
    "WHERE YEAR(re.fecha_salida) = @anio "+
    "AND emp.nombre LIKE '%'+@nombre+'%'"+
    "AND emp.apellido LIKE '%'+@apellido+'%'",
    //obtiene el empleado que mas rentas hizo en determinado año y mes
    getCountEmpleadosPrestamosMesAnio:"SELECT top 1 emp.nombre, emp.apellido, COUNT(re.id_empleado) as prestamos "+
    "FROM EMPLEADOS emp "+
    "inner join RESERVAS re on re.id_cliente = emp.id_empleado "+
    "WHERE MONTH(re.fecha_salida) = @mes AND "+
    "YEAR(re.fecha_salida) = @anio "+
    "group by emp.nombre , emp.apellido "+
    "order by (prestamos) desc",
    //obtiene las peliculas rentadas en un año determinado
    getPeliculasAnio: "SELECT pel.nombreP, COUNT(pel.nombreP) prestamos "+
    "FROM PELICULAS pel "+
    "inner join RESERVAS re on re.id_pelicula = pel.id_pelicula "+
    "WHERE YEAR(re.fecha_salida) = @anio "+
    "GROUP BY (pel.nombreP)",

    //obtiene las categorias que se consumen en un año
    getCategoriasAnio: "SELECT pel.categoria, COUNT(pel.categoria) prestamos "+
    "FROM PELICULAS pel "+
    "inner join RESERVAS re on re.id_pelicula = pel.id_pelicula "+
    "WHERE YEAR(re.fecha_salida) = @anio "+
    "GROUP BY (pel.categoria)",
    
    //obtiene las categorias de una determinada cuidad y año
    getCategoriasCiudad: "SELECT pel.categoria, cli.direccion, COUNT(pel.categoria) prestamos "+
    "FROM PELICULAS pel "+
    "inner join RESERVAS re on re.id_pelicula = pel.id_pelicula "+
    "inner join CLIENTES cli on cli.id_cliente = re.id_cliente "+
    "WHERE YEAR(re.fecha_salida) = @anio "+
    "AND cli.direccion LIKE '%'+@ciudad+'%' "+
    "GROUP BY pel.categoria, cli.direccion",

    //obtiene lso prestamos realizados por categoria de peliculas
    getPrestamosByCategoria:"SELECT pell.categoria,cli.nombre, cli.apellido,pell.nombreP,res.fecha_salida,res.fecha_devolucion, "+
    "emp.nombre 'nombre_emp', emp.apellido 'apellido_emp'"+
    "FROM RESERVAS res "+
    "INNER JOIN PELICULAS pell on pell.id_pelicula = res.id_pelicula "+
    "INNER JOIN CLIENTES cli on cli.id_cliente = res.id_cliente "+
    "INNER JOIN EMPLEADOS emp on emp.id_empleado = res.id_empleado "+
    "WHERE pell.categoria LIKE '%'+@categoria+'%'"
}