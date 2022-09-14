import { getConnection, sql, querys} from "../database";

export const getClientes = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllClientes);
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createClientes = async (req, res) => {
  const { nombre, apellido, cedula, telefono, direccion } = req.body;
  if (nombre == null || apellido == null || cedula == null || telefono == null || direccion == null) {
    return res.status(400).json({ msg: "Por favor llene todos los campos" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("apellido", sql.VarChar, apellido)
      .input("cedula", sql.VarChar, cedula)
      .input("telefono", sql.VarChar, telefono)
      .input("direccion", sql.VarChar, direccion)
      .query(querys.createClientes);
    res.json({nombre, apellido, cedula, telefono, direccion });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getClientesById = async (req, res) => {
    const {id} = req.params
    const pool = await getConnection();
    const result = await pool.request().input('Id', id).query(querys.getClientesById)
    console.log(result)
    res.send(result.recordset)
};

export const deleteClientes = async (req, res) => {
    const {id} = req.params
    const pool = await getConnection();
    const result = await pool.request().input('Id', id).query(querys.deleteClientes)
    console.log(result)
    res.json('Elemento eliminado ')
};

export const getCountClientes = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getTotalClientes);
    console.log(result);
    res.json(result.recordset[0][''])
};

export const updateClientes = async (req, res) => {
    const { nombre, apellido, cedula, telefono, direccion } = req.body;

    const {id} = req.params;
    if (nombre == null || apellido == null || cedula == null || telefono == null || direccion == null) {
        return res.status(400).json({ msg: "Por favor llene todos los campos" });
      }

    const pool = await getConnection();
    await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("apellido", sql.VarChar, apellido)
      .input("cedula", sql.VarChar, cedula)
      .input("telefono", sql.VarChar, telefono)
      .input("direccion", sql.VarChar, direccion)
      .input("Id", sql.Int, id)
      .query(querys.updateClientes);

    res.json({nombre, apellido, cedula, telefono, direccion});
};

export const getClientesByCiudad = async (req, res) => {
  const {ciudad} = req.body;

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("ciudad", sql.VarChar, ciudad)
      .query(querys.getClientesCiudad);
      res.json(result.recordset)
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getClientesPelicuas = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getClientesPelicuas);
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getClientePeliculasAnio = async (req, res) => {
  const {nombre, apellido, anio} = req.body;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("nombre", sql.VarChar, nombre)
      .input("apellido", sql.VarChar, apellido)
      .input("anio", sql.Int, anio)
      .query(querys.getClienteFechas);
      res.json(result.recordset)
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};