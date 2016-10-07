var express = require('express');
var router  = express.Router();

var incidenciaController = require('../controllers/incidenciaController');

router.route('/')
    .get(incidenciaController.getAllIncidencia)
    .post(incidenciaController.createIncidencia);

router.route('/:id')
    .get(incidenciaController.getStateIncidencia)
    .post(incidenciaController.upLoadIncidencia);


module.exports = router;
