var express = require('express');
var router  = express.Router();

var dependenceController = require('../controllers/dependenceController')

/* GET users listing. */

router.route('/')
    .get(dependenceController.getAllDependence)
    .post(dependenceController.createDependence);

router.route('/:id')
    .get(dependenceController.UpLoadDependence)
    .post(dependenceController.editAllDependence);

module.exports = router;
