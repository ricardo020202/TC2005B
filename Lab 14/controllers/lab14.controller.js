const orden = require('../models/ordenes.model');
const user = require('../models/users.model');

exports.login = (request, response, next) => {
    response.render('login', {
        titulo: 'Login',
    });
}

exports.post_login = (request, response, next) => {
    const user_nuevo = new user({
        username: request.body.username,
        password: request.body.password,
    });
    user_nuevo.save();
    request.session.ultima_orden = user_nuevo.username;
    response.status(300).redirect('/lab14/');
}

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
    request.session.ultima_orden = orden_nueva.nombre;
    response.status(300).redirect('/lab14/ordenes');
};

exports.get_ordenes = (request, response, next) => {
    const cookies = request.get('Cookie') || '';
    let consultas = cookies.split('=')[2] || 0;
    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    response.render('ordenes', {
        titulo: 'Ordenes',
        ordenes: orden.fetchAll(),
        ultima_orden: request.session.ultima_orden,
    });
};
