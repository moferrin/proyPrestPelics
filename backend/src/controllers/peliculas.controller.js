import { getConnection, sql, querys} from "../database";

export const getPeliculas = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllPeliculas);
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createPeliculas = async (req, res) => {
  const { nombreP, categoria } = req.body;
  if (nombreP == null || categoria == null) {
    return res.status(400).json({ msg: "Por favor llena todos los campos" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("nombreP", sql.VarChar, nombreP)
      .input("categoria", sql.VarChar, categoria)
      .query(querys.createPeliculas);
    res.json({ nombreP, categoria });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getPeliculasById = async (req, res) => {
    const {id} = req.params
    const pool = await getConnection();
    const result = await pool.request().input('Id', id).query(querys.getPeliculasById)
    console.log(result)
    res.send(result.recordset)
}

export const deletePeliculas = async (req, res) => {
    const {id} = req.params
    const pool = await getConnection();
    const result = await pool.request().input('Id', id).query(querys.deletePeliculas)
    console.log(result)
    res.json('Elemento eliminado ')
}

export const getCountPeliculas = async (req, res) => {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getTotalPeliculas);
    console.log(result);
    res.json(result.recordset[0][''])
}

export const updatePeliculas = async (req, res) => {
    const { nombreP, categoria } = req.body;

    const {id} = req.params;
    if (nombreP == null || categoria == null) {
      return res.status(400).json({ msg: "Por favor llena todos los campos" });
    }

    const pool = await getConnection();
    await pool
      .request()
      .input("nombreP", sql.VarChar, nombreP)
      .input("categoria", sql.VarChar, categoria)
      .input("Id", sql.Int, id)
      .query(querys.updatePeliculas);

    res.json({ nombreP, categoria });
}

export const getCategoriasByAnio = async (req, res) => {
  const {anio} = req.params
  const pool = await getConnection();
  const result = await pool.request().input('anio', anio).query(querys.getCategoriasAnio)
  console.log(result)
  res.send(result.recordset)
}

export const getCategoriasByCiudad = async (req, res) => {
  const { anio, ciudad } = req.body;
  const pool = await getConnection();
  const result = await pool.request()
  .input('anio', anio)
  .input('ciudad', ciudad)
  .query(querys.getCategoriasCiudad)
  console.log(result)
  res.send(result.recordset)
}