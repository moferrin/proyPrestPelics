import express from 'express';
import config from './config';
import peliculasRoutes from './routes/peliculas.routes';
import clientesRoutes from './routes/clientes.routes';
import reservasRoutes from './routes/reservas.routes';
import empleadosRoutes from './routes/empleados.routes';
import usuariosRoutes from './routes/usuarios.routes';
const cors = require('cors');
const app = express();
//settings

app.set('port', config.port);

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.use(peliculasRoutes);
app.use(clientesRoutes);
app.use(reservasRoutes);
app.use(empleadosRoutes);
app.use(usuariosRoutes);

export default app;

