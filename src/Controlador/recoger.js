'use strict';

const recoleccion = require('../modelos/recoleccionModelo');

exports.findAll = function(req, res) {
    recoleccion.findAll(function(err, recoleccion) {
    console.log('controlador')
    if (err)
    res.send(err);
    console.log('res', recoleccion);
    res.send(recoleccion);
  });
};

exports.findById = function(req, res) {
    recoleccion.findById(req.params.id, function(err, recoleccion) {
        if (err)
        res.send(err);
        res.json(recoleccion);
    });
};


exports.create = function(req, res) {
    const new_recoleccion = new recoleccion(req.body);

   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor proporciona todos los campos requeridos.' });
    }else{
        recoleccion.create(new_recoleccion, function(err, recoleccion) {
            if (err)
            res.send(err);
            res.json({error:false,message:"¡Recoleccion añadidos exitosamente!",data:recoleccion});
        });
    }
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor proporciona todos los campos requeridos.' });
    }else{
        recoleccion.update(req.params.id, new recoleccion(req.body), function(err, recoleccion) {
            if (err)
            res.send(err);
            res.json({ error:false, message: '¡Recoleccion actualizados exitosamente!' });
        });
    }
  
};


exports.delete = function(req, res) {
    recoleccion.delete( req.params.id, function(err, recoleccion) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Recoleccion borrados exitosamente!' });
  });
};