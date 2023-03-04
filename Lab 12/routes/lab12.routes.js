const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.render('index', {
        titulo: 'M1000R Ficha tecnica',
    });
});

router.get('/preguntas', (request, response, next) => {
    response.render('preguntas', {
        titulo: 'Preguntas',
    });
});

router.get('/ordenar', (request, response, next) => {
    response.render('ordenar', {
        titulo: 'Ordenar',
    });
});

router.post('/ordenar', (request, response, next) => {
    response.render('confirmar', {
        titulo: 'confirmar orden',
        nombre: request.body.nombre,
        apellido: request.body.apellido,
        direccion: request.body.direccion,
        telefono: request.body.telefono,
        email: request.body.email,
        password: request.body.password,
        tarjeta: request.body.tarjeta,
        cvv: request.body.cvv,
    });
});

module.exports = router;