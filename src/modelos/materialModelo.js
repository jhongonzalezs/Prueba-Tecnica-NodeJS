'user strict';
var dbConn = require('../BDSQL/db');

const Materials = function(material){
    this.nombreMaterial = material.nombreMaterial;
    this.pesoMaterial   = material.pesoMaterial;
    this.valorMaterial  = material.valorMaterial;
};
Materials.create = function (newMaterials, result) {    
    dbConn.query("INSERT INTO materials set ?", newMaterials, function (err, res) {
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

Materials.findById = function (id, result) {
    dbConn.query("Select * from materials where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Materials.findAll = function (result) {
    dbConn.query("Select * from materials", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('material : ', res);  
            result(null, res);
        }
    });   
};
Materials.update = function(id, material, result){
  dbConn.query("UPDATE materials SET nombreMaterial=?,pesoMaterial=?, valorMaterial=? WHERE id = ?", [material.nombreMaterial, material.valorMaterial, material.pesoMaterial, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Materials.delete = function(id, result){
     dbConn.query("DELETE FROM materials WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Materials;