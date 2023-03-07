const express = require('express');
const path = require('path');
const router = express.Router();
const lab13Controller = require('../controllers/lab13.controller');

router.get('/', lab13Controller.get_index);

router.get('/preguntas', lab13Controller.get_preguntas);

router.get('/ordenar', lab13Controller.get_ordenar);

router.post('/ordenar', lab13Controller.post_ordenar);

module.exports = router;