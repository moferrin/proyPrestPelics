import {Router} from 'express'

import { createClientes, deleteClientes, getClientes, getClientesById, getCountClientes, updateClientes,
     getClientesByCiudad, getClientesPelicuas, getClientePeliculasAnio } from '../controllers/clientes.controller'

//CLIENTES
const route = Router()

route.get('/clientes', getClientes)

route.get('/clientes/:id', getClientesById)

route.get('/clientesCount', getCountClientes)

route.post('/clientes', createClientes)

route.delete('/clientes/:id', deleteClientes)

route.put('/clientes/:id', updateClientes)

//especializadas

route.post('/clientesCiudad/', getClientesByCiudad)

route.get('/clientesPeliculas/', getClientesPelicuas)

route.post('/clientesPeliculasFecha/', getClientePeliculasAnio)

export default route 