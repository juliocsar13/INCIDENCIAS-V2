var express = require('express');
var router  = express.Router();

var historyController = require('../controllers/historyController')

router.route('/')
    .get(historyController.getAllHistory)
//    .post(historyController.createHistory);

module.exports = router;
