const {sign} = require("jsonwebtoken")
const {autenticacionJWT} = require("../autenticacion/autenticacionJWT")
const material = require('../Controlador/material')
const express = require('express')
const rutasMateriales = express.Router()



/**
 * @swagger
 * components: 
 *    schemas:
 *       user:
 *       type: object
 *          properties: 
 *              name: 
 *              type: String
 *              descripcion: RutasMateriales
 */



// devuelve una lista de todos los materiales
rutasMateriales.get('/materials', material.findAll);

// devuelve los materiales pertenecientes al id
rutasMateriales.get('/materials/:id', material.findById);

//crear un nuevo material
rutasMateriales.post('/materials', material.create);

//actualiza los detalles de los materiales
rutasMateriales.put('/materials/:id', material.update);

//elimina un material existente
rutasMateriales.delete('/materials/:id', material.delete);

module.exports = rutasMateriales