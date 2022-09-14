import {Router} from 'express'

import { getEmpleados, getEmpleadosById, getCountEmpleados, createEmpleados,
     getEmpleadosPelicuas, getEmpleadoPeliculasAnio, getCountEmpleadosPrestamosMesAnio, updateEmpleados, deleteEmpleados } from '../controllers/empleados.controller'

//EMPLEADOS
const route = Router()

route.get('/empleados', getEmpleados)

route.post('/empleados', createEmpleados)

route.put('/empleados/:id', updateEmpleados)

route.delete('/empleados/:id', deleteEmpleados)

route.get('/empleados/:id', getEmpleadosById)

route.get('/empleadosCount', getCountEmpleados)


//especializadas

route.get('/empleadosPeliculas/', getEmpleadosPelicuas)

route.post('/empleadosPeliculasAnio/', getEmpleadoPeliculasAnio)

route.post('/countEmpleadosPrestamosMesAnio/', getCountEmpleadosPrestamosMesAnio)

export default route 