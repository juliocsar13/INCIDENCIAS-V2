var express = require('express');
var router  = express.Router();

var staffController = require('../controllers/staffController')

/* GET users listing. */

router.route('/')
    .get(staffController.getAllStaff)
    .post(staffController.createStaff);

router.route('/:id')
    .get(staffController.UpLoadStaff)
    .post(staffController.editAllStaff)
    .put(staffController.UpdateState)

module.exports = router;
