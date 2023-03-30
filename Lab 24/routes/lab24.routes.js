const express = require('express');
const path = require('path');
const router = express.Router();
const lab24Controller = require('../controllers/lab24.controller');
const admin = require('../util/admin');

router.get('/', lab24Controller.get_index);

router.get('/preguntas', lab24Controller.get_preguntas);

router.get('/ordenar', lab24Controller.get_ordenar);

router.post('/ordenar', lab24Controller.post_ordenar);

router.get('/ordenes/:id', lab24Controller.get_ordenes);

router.get('/ordenes', lab24Controller.get_ordenes);

router.get('/modificar', lab24Controller.get_modificar);

router.get('/modificar/:id', lab24Controller.get_modificar);

router.post('/modificar/:id', lab24Controller.post_modificar);

router.get('/admin', admin, lab24Controller.get_admin);

router.get('/user', lab24Controller.get_user);

router.get('/buscar/:valor_busqueda', lab24Controller.get_buscar);

module.exports = router;