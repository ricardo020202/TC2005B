const express = require('express');
const path = require('path');
const router = express.Router();
const lab22Controller = require('../controllers/lab22.controller');
const admin = require('../util/admin');

router.get('/', lab22Controller.get_index);

router.get('/preguntas', lab22Controller.get_preguntas);

router.get('/ordenar', lab22Controller.get_ordenar);

router.post('/ordenar', lab22Controller.post_ordenar);

router.get('/ordenes/:id', lab22Controller.get_ordenes);

router.get('/ordenes', lab22Controller.get_ordenes);

router.get('/modificar', lab22Controller.get_modificar);

router.get('/modificar/:id', lab22Controller.get_modificar);

router.post('/modificar/:id', lab22Controller.post_modificar);

router.get('/admin', admin, lab22Controller.get_admin);

module.exports = router;