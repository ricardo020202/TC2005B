const express = require('express');
const path = require('path');
const router = express.Router();
const lab17Controller = require('../controllers/lab17.controller');
const userController = require('../controllers/users.controller');

router.get('/', lab17Controller.get_index);

router.get('/preguntas', lab17Controller.get_preguntas);

router.get('/ordenar', lab17Controller.get_ordenar);

router.post('/ordenar', lab17Controller.post_ordenar);

router.get('/ordenes/:id', lab17Controller.get_ordenes);

router.get('/ordenes', lab17Controller.get_ordenes);

router.get('/login', lab17Controller.login);

router.post('/login', lab17Controller.post_login);

router.get('/logout', userController.logout);

router.get('/modificar', lab17Controller.get_modificar);

router.get('/modificar/:id', lab17Controller.get_modificar);

router.post('/modificar/:id', lab17Controller.post_modificar);

module.exports = router;