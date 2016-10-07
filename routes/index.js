'use strict'

var express         = require('express')
var router          = express.Router()
var jwt             = require('jsonwebtoken')
var staff           = require('./staff')
var costumer        = require('./costumer')
var dependence      = require('./dependence')
var incidencias     = require('./incidencias')
var indexHistory    = require('./history')
var middleware      = require('../controllers/middleware')
var models          = require('../models')
var secret          = "ilovescotchyscotch";


router.get('/',middleware.checkLogin,function(req,res){
    return res.render('index',{title:'OSIS'})
})

router.use('/historial',middleware.checkLogin,indexHistory)
router.use('/clientes',middleware.checkLogin,costumer);
router.use('/incidencias',middleware.checkLogin,incidencias);
router.use('/dependencias',middleware.checkLogin,dependence);
router.use('/usuarios',middleware.checkLogin,staff);

router.route('/login')
    .get(function(req,res){
        res.render('login/index',{title:'OSIS'})
    })

    .post(function(req,res){
        models.Staff.find({

            where:{
                dni:req.body.dni,
                password:req.body.password
            }

        }).then(function(user){

            if(user){
                var user  = JSON.stringify(user);

                var token = jwt.sign(user,secret);

                var _token_  = jwt.decode(token)

                var flat = _token_.flat;

                if(flat=="habilitado"){

                    req.session.user = token;
                    res.redirect('/incidencias');

                }else{
                    res.redirect('/login')
                }
            }
        })
    });

router.get('/logout',function(req,res){
    req.session.user = null;
    res.redirect('/login')
})

function middlewareCheckLogin2(req, res, next){
    console.log(req.session.user)
    if(!req.session.user){
        res.redirect('/login');
    }else{
        next();
    }
}

module.exports = router;
