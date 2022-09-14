import sql from "mssql";
const mongoose = require('mongoose');

const dbSettings = {
  user: "peliculasAdmin",
  password: "Pelis1234",
  server: "proyecto-peliculas-server.database.windows.net",
  database: "PRESTAMOS_PELICULAS",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error(error)
  }
}

mongoose.connect('mongodb+srv://peliculasAdmin:Pelis1234@clusterproyect.2zog0xk.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));

export {sql, mongoose};