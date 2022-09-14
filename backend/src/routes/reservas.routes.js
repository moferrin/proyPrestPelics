import {Router} from 'express'
import { createReservas, deleteReservas, getCountReservas, getReservas, getReservasById, updateReservas,
    getReservasByAnio, getPrestamosByCategoria } from '../controllers/reservas.controller'

const route = Router()

route.get('/reservas', getReservas)

route.get('/reservas/:id', getReservasById)

route.get('/reservasCount', getCountReservas)

route.post('/reservas', createReservas)

route.delete('/reservas/:id', deleteReservas)

route.put('/reservas/:id', updateReservas)

//AVANZADAS
route.get('/reservasAnio/:anio', getReservasByAnio)

route.post('/reservasByCategoria/', getPrestamosByCategoria)

export default route;