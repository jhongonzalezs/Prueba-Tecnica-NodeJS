'user strict';
var dbConn = require('../BDSQL/db');

const Recoleccion = function(recoger){
    this.materialReciclado = recoger.materialReciclado;
    this.cantidadRecolectado   = recoger.cantidadRecolectado;
    this.fechaRecolectado  = recoger.fechaRecolectado;
};
Recoleccion.create = function (newRecoleccion, result) {    
    dbConn.query("INSERT INTO recoleccion set ?", newRecoleccion, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};

Recoleccion.findById = function (id, result) {
    dbConn.query("Select * from recoleccion where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Recoleccion.findAll = function (result) {
    dbConn.query("Select * from recoleccion", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('recoleccion : ', res);  
            result(null, res);
        }
    });   
};
Recoleccion.update = function(id, recoger, result){
  dbConn.query("UPDATE recoleccion SET materialReciclado=?, cantidadRecolectado=?, fechaRecolectado=?  WHERE id = ?", [recoger.materialReciclado,recoger.cantidadRecolectado,recoger.fechaRecolectado, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Recoleccion.delete = function(id, result){
     dbConn.query("DELETE FROM recoleccion WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Recoleccion;