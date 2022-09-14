import { getConnection, sql, querys} from "../database";

export const getReservas = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllReservas);
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createReservas = async (req, res) => {
  const { id_cliente, id_pelicula, fecha_salida, fecha_devolucion, id_empleado } = req.body;
  if (id_cliente == null || id_pelicula == null || id_empleado == null || fecha_salida == null || fecha_devolucion == null) {
    return res.status(400).json({ msg: "Por favor llene todos los campos" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("id_cliente", sql.Int, id_cliente)
      .input("id_pelicula", sql.Int, id_pelicula)
      .input("fecha_salida", sql.VarChar, fecha_salida)
      .input("fecha_devolucion", sql.VarChar, fecha_devolucion)
      .input("id_empleado", sql.Int, id_empleado)
      .query(querys.createReservas);
    res.json({id_cliente, id_pelicula, fecha_salida, fecha_devolucion,id_empleado });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getReservasById = async (req, res) => {
    const {id} = req.params
    const pool = await getConnection();
    const result = await pool.request().input('Id', id).query(querys.getReservasById)
    console.log(result)
    res.send(result.recordset)
}

export const deleteReservas = async (req, res) => {
    const {id} = req.params
    const pool = await getConnection();
    const result = await pool.request().input('Id', id).query(querys.deleteReservas)
    console.log('eliminado: ' + id)
    console.log(result)
    res.json('Elemento eliminado')
}

export const getCountReservas = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getTotalReservas);
    console.log(result);
    res.json(result.recordset[0][''])
}

export const updateReservas = async (req, res) => {
    const { id_cliente, id_pelicula, fecha_salida, fecha_devolucion } = req.body;

    const {id} = req.params;
    if (id_cliente == null || id_pelicula == null || fecha_salida == null || fecha_devolucion == null) {
        return res.status(400).json({ msg: "Por favor llene todos los campos" });
      }

    try {
        const pool = await getConnection();
        await pool
          .request()
          .input("id_cliente", sql.Int, id_cliente)
          .input("id_pelicula", sql.Int, id_pelicula)
          .input("fecha_salida", sql.VarChar, fecha_salida)
          .input("fecha_devolucion", sql.VarChar, fecha_devolucion)
          .input("Id", sql.Int, id)
          .query(querys.updateReservas);
        res.json({id_cliente, id_pelicula, fecha_salida, fecha_devolucion });
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
}


export const getReservasByAnio = async (req, res) => {
  const {anio} = req.params
  const pool = await getConnection();
  const result = await pool.request().input('anio', anio).query(querys.getPeliculasAnio)
  console.log(result)
  res.send(result.recordset)
}

export const getPrestamosByCategoria = async (req, res) => {
  const {categoria} = req.body;
  const pool = await getConnection();
  const result = await pool
  .request()
  .input('categoria', sql.VarChar, categoria)
  .query(querys.getPrestamosByCategoria)
  console.log(result)
  res.send(result.recordset)
}