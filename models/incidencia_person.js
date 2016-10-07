"use strict"

module.exports = function(sequelize,DataType){
	var IncidenciaPerson = sequelize.define("IncidenciaPerson",{
		participation:DataType.STRING

	},{
		classMethods:{
			//IncidenciaPerson.hasMany(models.RolParticipation)

		}

	})
	return IncidenciaPerson;
}


/*
person_id:{
	type:DataType.STRING,
	unique:'incidencia_operation_person'
}
taggable:{
	type:DataType.STRING,
	unique:'incidencia_operation_person'
}
incidencia_id:{
	type:DataType.STRING,
	unique:'incidencia_operation_person',
	reference:null
}
*/
