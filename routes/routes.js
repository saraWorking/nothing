const router = require('express').Router();

const controller= require('../controllers/controlers')

router.get('/getUserById/:id', controller.getUserById);

module.exports =router;