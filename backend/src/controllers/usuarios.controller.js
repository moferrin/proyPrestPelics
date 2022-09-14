import { getConnection, sql, querys} from "../database";

export const getUsuarios = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllUsuarios);
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createUsuarios = async (req, res) => {
    const { nombres, nom_usuario, email, contrasena} = req.body;
    if (nombres == null || nom_usuario == null || email == null || contrasena == null) {
      return res.status(400).json({ msg: "Por favor llene todos los campos" });
    }
    try {
      const pool = await getConnection();
      await pool
        .request()
        .input("nombres", sql.VarChar, nombres)
        .input("nom_usuario", sql.VarChar, nom_usuario)
        .input("email", sql.VarChar, email)
        .input("contrasena", sql.VarChar, contrasena)
        .query(querys.createUsuarios);
      res.json({nombres, nom_usuario, email, contrasena});
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };