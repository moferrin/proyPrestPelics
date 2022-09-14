import {Router} from 'express'

import { getPeliculas, createPeliculas, getPeliculasById, deletePeliculas, updatePeliculas, getCountPeliculas,
    getCategoriasByAnio, getCategoriasByCiudad } from '../controllers/peliculas.controller'

const route = Router()
//PELICULAS
route.get('/peliculas', getPeliculas)

route.get('/peliculas/:id', getPeliculasById)

route.get('/peliculasCount', getCountPeliculas)

route.post('/peliculas', createPeliculas)

route.delete('/peliculas/:id', deletePeliculas)

route.put('/peliculas/:id', updatePeliculas)

route.get('/categoriasByAnio/:anio', getCategoriasByAnio)

route.post('/categoriasByCiudad/', getCategoriasByCiudad)


export default route 