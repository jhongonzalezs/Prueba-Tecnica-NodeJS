const {sign} = require("jsonwebtoken")
const {autenticacionJWT} = require("../autenticacion/autenticacionJWT")
const Recoleccion = require('../Controlador/recoger')
const express = require('express')
const rutasRecolecciones = express.Router()


/**
 * @swagger
 * components: 
 *    schemas:
 *       user:
 *       type: object
 *          properties: 
 *              name: 
 *              type: String
 *              descripcion: RutasRecolecciones
 */

// devuelve una lista de todos las recolecciones
rutasRecolecciones.get('/collections', Recoleccion.findAll);

// devuelve las recolecciones pertenecientes al id
rutasRecolecciones.get('/collections/:id', Recoleccion.findById);

//crear una nueva recoleccion
rutasRecolecciones.post('/collections', Recoleccion.create);

//actualiza los detalles de una recoleccion
rutasRecolecciones.put('/collections/:id', Recoleccion.update);

//elimina una recoleccion existente
rutasRecolecciones.delete('/collections/:id', Recoleccion.delete);

module.exports = rutasRecolecciones