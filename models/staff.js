"use strict"
module.exports = function(sequelize,DataType){

	var Staff = sequelize.define("Staff",{

		dni:DataType.STRING,
		password:DataType.STRING,
		name:DataType.STRING,
        lastname:DataType.STRING,
        email:DataType.STRING,
        phone:DataType.STRING,
        role:DataType.STRING,
		flat:DataType.STRING,
		dependence:DataType.STRING,
        register_date_staff:DataType.STRING,
		recorder:DataType.STRING

	})

	return Staff;
}
