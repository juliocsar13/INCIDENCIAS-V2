"use strict"

module.exports = function(sequelize,DataType){
	var Incidencia = sequelize.define("Incidencia",{

		title:DataType.STRING,
        description:DataType.STRING,
		priority:DataType.STRING,
		state:DataType.STRING,
		registration_date:DataType.STRING,
		comment:DataType.STRING,
		dependence:DataType.STRING,
		notificacionMeans:DataType.STRING,
		costumer:DataType.STRING,
		userRegister:DataType.STRING,
		technical:DataType.STRING


	},{
		classMethods:{
			associate:function(models){
				Incidencia.belongsToMany(models.Costumer,{through:models.IncidenciaPerson})
			}
		}
	})
	return Incidencia;
}


/*,{
	through:{
		model:Operation,
		unique:false
	},
	foreignKey:'person_id'
}*/
