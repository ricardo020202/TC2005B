const orden = require('../models/ordenes.model');

exports.get_index = (request, response, next) => {
    response.render('index', {
        titulo: 'M1000R Ficha tecnica',
    });
};

exports.get_preguntas = (request, response, next) => {
    response.render('preguntas', {
        titulo: 'Preguntas',
    });
};

exports.get_ordenar = (request, response, next) => {
    response.render('ordenar', {
        titulo: 'Ordenar',
    });
};

exports.post_ordenar = (request, response, next) => {
    const orden_nueva = new orden({
        nombre: request.body.nombre,
        apellido: request.body.apellido,
        direccion: request.body.direccion,
        telefono: request.body.telefono,
        email: request.body.email,
        password: request.body.password,
        tarjeta: request.body.tarjeta,
        cvv: request.body.cvv,
    });
    orden_nueva.save();
    response.status(300).redirect('/lab13/ordenes');
};

exports.get_ordenes = (request, response, next) => {
    response.render('ordenes', {
        titulo: 'Ordenes',
        ordenes: orden.fetchAll(),
    });
};
