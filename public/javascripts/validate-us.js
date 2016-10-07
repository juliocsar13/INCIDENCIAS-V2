$(document).ready(function() {
  $('#form-user').bootstrapValidator({
	 message: 'Este valor no es valido',
	 feedbackIcons: {
		 valid: 'glyphicon-ok',
		 invalid: 'glyphicon-remove',
		 validating: 'glyphicon glyphicon-refresh'
	 },
	 fields: {
		 name: {
			 validators: {
				 notEmpty: {
					 //message: 'El nombre de usuario es requerido'
				 }
			 }
		 },
		 dni: {
			 validators: {
				 notEmpty: {
					 //message: 'La contraseña es requerida'
				 }
         stringLength: {
					 min: 8,
         }
         regexp: {
					 regexp: /^[0-9]+$/,
					 message: 'El teléfono solo puede contener números'
				 }
			 }
		 },
     "last-name": {
			 validators: {
				 notEmpty: {
					 //message: 'El nombre de usuario es requerido'
				 }
			 }
		 },
     email: {
			 validators: {
				 notEmpty: {
					 //message: 'El nombre de usuario es requerido'
				 }
			 }
		 },
     name: {
			 validators: {
				 notEmpty: {
					 //message: 'El nombre de usuario es requerido'
				 }
			 }
		 },
     phone: {
			 validators: {
				 notEmpty: {
					 //message: 'El nombre de usuario es requerido'
				 }
         regexp: {
					 regexp: /^[0-9]+$/,
					 message: 'El teléfono solo puede contener números'
				 }
			 }
		 }

	 }
});
});
