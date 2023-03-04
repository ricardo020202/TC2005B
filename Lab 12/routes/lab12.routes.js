const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

router.get('/preguntas', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'preguntas.html'));
});

module.exports = router;