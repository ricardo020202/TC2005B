const express = require('express');
const path = require('path');
const router = express.Router();
const lab14Controller = require('../controllers/lab14.controller');
const userController = require('../controllers/users.controller');

router.get('/', lab14Controller.get_index);

router.get('/preguntas', lab14Controller.get_preguntas);

router.get('/ordenar', lab14Controller.get_ordenar);

router.post('/ordenar', lab14Controller.post_ordenar);

router.get('/ordenes', lab14Controller.get_ordenes);

router.get('/login', lab14Controller.login);

router.post('/login', lab14Controller.post_login);

router.get('/logout', userController.logout);

module.exports = router;