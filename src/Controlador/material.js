'use strict';

const materials = require('../modelos/materialModelo');

exports.findAll = function(req, res) {
    materials.findAll(function(err, materials) {
    console.log('controlador')
    if (err)
    res.send(err);
    console.log('res', materials);
    res.send(materials);
  });
};

exports.findById = function(req, res) {
    materials.findById(req.params.id, function(err, materials) {
        if (err)
        res.send(err);
        res.json(materials);
    });
};


exports.create = function(req, res) {
    const new_materials = new materials(req.body);

   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor proporciona todos los campos requeridos.' });
    }else{
        materials.create(new_materials, function(err, materials) {
            if (err)
            res.send(err);
            res.json({error:false,message:"¡Materiales añadidos exitosamente!",data:materials});
        });
    }
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor proporciona todos los campos requeridos.' });
    }else{
        materials.update(req.params.id, new materials(req.body), function(err, materials) {
            if (err)
            res.send(err);
            res.json({ error:false, message: '¡Materiales actualizados exitosamente!' });
        });
    }
  
};


exports.delete = function(req, res) {
    materials.delete( req.params.id, function(err, materials) {
    if (err)
    res.send(err);
    res.json({ error:false, message: '¡Materiales borrados exitosamente!' });
  });
};