"use strict"
module.exports = function(sequelize,DataType){

	var Costumer = sequelize.define("Costumer",{

        dni:{
                type:DataType.STRING,
                unique:true
        },
		name:DataType.STRING,
        lastname:DataType.STRING,
        email:DataType.STRING,
        phone:DataType.STRING,
        role:DataType.STRING,
        register_date_person:DataType.STRING,
		recorder:DataType.STRING

	},{
		classMethods:{
			associate:function(models){
				Costumer.belongsToMany(models.Incidencia,{through:models.IncidenciaPerson})
			}
		}
	});

	return Costumer;
}
