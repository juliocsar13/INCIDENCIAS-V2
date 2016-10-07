"use strict"
var models = require('../models')

module.exports.createIncidencia = function (req,res){
	models.Incidencia.create({

        id:req.body.id,
        title:req.body.title,
        description:req.body.description,
        priority:req.body.priority,
		state:req.body.state,
		registration_date:req.body.registration_date,
		comment:req.body.comment,
		notificacionMeans:req.body.notificacionMeans,
		costumer:req.body.costumer,
		userRegister:req.body.userRegister,
		dependence:req.body.dependence,
		technical:req.body.technical

	}).then(function(incidencias){
		res.redirect('/incidencias');
	})

	.catch(function(err){
		res.status(503).send(err.id+" "+err.message);
	})
}

module.exports.renderIncidencia = function(req,res){
		res.render('incidencias/index',{title:'OSIS'})
}

module.exports.getAllIncidencia = function(req,res){

    models.Incidencia.findAll().then(function(incidencias){

		models.Dependence.findAll().then(function(dependences){

			models.Costumer.findAll().then(function(costumers){

				models.Staff.findAll().then(function(staffs){

					res.render('incidencias/index',{incidencias:incidencias,dependences:dependences,costumers:costumers,staffs:staffs,title:'OSIS'})

				})
			})
		})
    })
}

module.exports.upLoadIncidencia = function(req,res){

	models.Incidencia.find({
      where: {
        id: req.params.id
      }
  }).then(function(incidencia) {
      	if(incidencia){
	        incidencia.updateAttributes({

	          state: req.body.state,
			  comment:req.body.comment

		  	}).then(function(incidencias){
			  	res.send(incidencias)
	        })
	    }
    });

}

module.exports.getStateIncidencia = function(req,res){
	models.Incidencia.find({
		where:{
			id:req.params.id
		}
	}).then(function(incidencia){
		if(incidencia){
			res.json(incidencia)
		}
	})
}

/*module.exports.getIncidenciaState = function(req,res){
	models.Incidencia.find({
		where:{
			id:req.params.id
		}
	}).then(function(state){
		if(state){
			res.json(state)
		}
	})
}*/
/*
module.exports.updateOneStateIncidencia = function(req,res){
	models.Incidencia.findOne({
		where:{
			id:req.params.id
		}
	}).then(function(incidencia){
		incidencia.updateAtributes({
			state:req.body.state
		}).then(function(incidencias){
			res.render('incidencias/index',{incidencias:incidencias})
		})
		.catch(function (err) {
			res.status(503)

		})

	})
};
*/
