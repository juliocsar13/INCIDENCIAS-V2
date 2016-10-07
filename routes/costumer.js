var express = require('express');
var router  = express.Router();

var costumerController = require('../controllers/costumerController')

/* GET users listing. */

router.route('/')
    .get(costumerController.getAllCostumer)
    .post(costumerController.createCostumer);

router.route('/:id')
    .get(costumerController.UpLoadDependence)
    .post(costumerController.editAllDependence);
module.exports = router;
