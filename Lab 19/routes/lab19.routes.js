const express = require('express');
const path = require('path');
const router = express.Router();
const lab19Controller = require('../controllers/lab19.controller');
const admin = require('../util/admin');

router.get('/', lab19Controller.get_index);

router.get('/preguntas', lab19Controller.get_preguntas);

router.get('/ordenar', lab19Controller.get_ordenar);

router.post('/ordenar', lab19Controller.post_ordenar);

router.get('/ordenes/:id', lab19Controller.get_ordenes);

router.get('/ordenes', lab19Controller.get_ordenes);

router.get('/modificar', lab19Controller.get_modificar);

router.get('/modificar/:id', lab19Controller.get_modificar);

router.post('/modificar/:id', lab19Controller.post_modificar);

router.get('/admin', admin, lab19Controller.get_admin);

module.exports = router;