"use strict"
module.exports = function(sequelize,DataType){

	var Dependence = sequelize.define("Dependence",{

		nameDependence:DataType.STRING,
		siglas:DataType.STRING

	})

	return Dependence;
}
