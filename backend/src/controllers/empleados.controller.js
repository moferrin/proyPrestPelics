import { getConnection, sql, querys} from "../database";

export const getEmpleados = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllEmpleados);
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createEmpleados = async (req, res) => {
  const { nombreE, apellidoE, cedulaE, telefonoE, direccionE } = req.body;
  if (nombreE == null || apellidoE == null || cedulaE == null || telefonoE == null || direccionE == null) {
    return res.status(400).json({ msg: "Por favor llene todos los campos" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("nombreE", sql.VarChar, nombreE)
      .input("apellidoE", sql.VarChar, apellidoE)
      .input("cedulaE", sql.VarChar, cedulaE)
      .input("telefonoE", sql.VarChar, telefonoE)
      .input("direccionE", sql.VarChar, direccionE)
      .query(querys.createEmpleados);

    res.json({nombreE, apellidoE, cedulaE, telefonoE, direccionE });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateEmpleados = async (req, res) => {
  const { nombreE, apellidoE, cedulaE, telefonoE, direccionE } = req.body;
  const {id} = req.params;
  if (nombreE == null || apellidoE == null || cedulaE == null || telefonoE == null || direccionE == null) {
      return res.status(400).json({ msg: "Por favor llene todos los campos" });
    }
  const pool = await getConnection();
  await pool
    .request()
    .input("nombreE", sql.VarChar, nombreE)
    .input("apellidoE", sql.VarChar, apellidoE)
    .input("cedulaE", sql.VarChar, cedulaE)
    .input("telefonoE", sql.VarChar, telefonoE)
    .input("direccionE", sql.VarChar, direccionE)
    .input("Id", sql.Int, id)
    .query(querys.updateEmpleados);

  res.json({nombreE, apellidoE, cedulaE, telefonoE, direccionE});
};

export const getEmpleadosById = async (req, res) => {
    const {id} = req.params
    const pool = await getConnection();
    const result = await pool.request().input('Id', id).query(querys.getEmpleadosById)
    console.log(result)
    res.send(result.recordset)
};

export const deleteEmpleados = async (req, res) => {
  const {id} = req.params
  const pool = await getConnection();
  const result = await pool.request().input('Id', id).query(querys.deleteEmpleados)
  console.log(result)
  res.json('Elemento eliminado')
};

export const getCountEmpleados = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getTotalEmpleados);
    console.log(result);
    res.json(result.recordset[0][''])
};


export const getEmpleadosPelicuas = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getEmpleadosPelicuas);
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getEmpleadoPeliculasAnio = async (req, res) => {
  const {nombreE, apellidoE, anio} = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("nombreE", sql.VarChar, nombreE)
      .input("apellidoE", sql.VarChar, apellidoE)
      .input("anio", sql.Int, anio)
      .query(querys.getEmpleadoPeliculasAnio);
      res.json(result.recordset)
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getCountEmpleadosPrestamosMesAnio = async (req, res) => {
  const {mes, anio} = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("mes", sql.Int, mes)
      .input("anio", sql.Int, anio)
      .query(querys.getCountEmpleadosPrestamosMesAnio);
      res.json(result.recordset)
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};