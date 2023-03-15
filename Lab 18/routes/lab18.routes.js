const express = require('express');
const path = require('path');
const router = express.Router();
const lab18Controller = require('../controllers/lab18.controller');

router.get('/', lab18Controller.get_index);

router.get('/preguntas', lab18Controller.get_preguntas);

router.get('/ordenar', lab18Controller.get_ordenar);

router.post('/ordenar', lab18Controller.post_ordenar);

router.get('/ordenes/:id', lab18Controller.get_ordenes);

router.get('/ordenes', lab18Controller.get_ordenes);

router.get('/modificar', lab18Controller.get_modificar);

router.get('/modificar/:id', lab18Controller.get_modificar);

router.post('/modificar/:id', lab18Controller.post_modificar);

module.exports = router;