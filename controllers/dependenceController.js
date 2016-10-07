'use strict'

var models = require('../models')

module.exports.createDependence = function(req,res){
    models.Dependence.create({
        id:req.body.id,
        nameDependence:req.body.nameDependence,
        siglas:req.body.siglas

    }).then(function(dependences){
        res.redirect('back');
    })

    .catch(function(err){
    	res.status(503).send(err.id+" "+err.message);
    })
}

module.exports.getAllDependence = function(req,res){
    models.Dependence.findAll().then(function(dependences){
        res.render('dependence/index',{dependences:dependences,title:'OSIS'});
    });
}

module.exports.UpLoadDependence = function(req,res){
    models.Dependence.find({
        where:{
            id:req.params.id
        }
    }).then(function(dependence){
        if(dependence){
            res.json(dependence)
        }
    })
}

module.exports.editAllDependence = function(req,res){
    models.Dependence.find({
        where:{
            id:req.params.id
        }
    }).then(function(_dependence_){
        console.log("EDITAR DEPENDENCIA",_dependence_);
        if (_dependence_) {
            _dependence_.updateAttributes({
                nameDependence:req.body.nameDependence,
                siglas:req.body.siglas
            }).then(function(_dependence_){
                console.log(_dependence_)
                res.render('incidencias/index',{dependences:_dependence_})
            })
        }
    })
}
