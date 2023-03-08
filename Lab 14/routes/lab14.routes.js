const express = require('express');
const path = require('path');
const router = express.Router();
const lab14Controller = require('../controllers/lab14.controller');

router.get('/', lab14Controller.get_index);

router.get('/preguntas', lab14Controller.get_preguntas);

router.get('/ordenar', lab14Controller.get_ordenar);

router.post('/ordenar', lab14Controller.post_ordenar);

router.get('/ordenes', lab14Controller.get_ordenes);

module.exports = router;