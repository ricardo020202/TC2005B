const orden = require('../models/ordenes.model');
const user = require('../models/users.model');

exports.login = (request, response, next) => {
    response.render('login', {
        titulo: 'Login',
        users: user.fetchAll(),
        user: request.session.user || '',
    });
}

exports.post_login = (request, response, next) => {
    const user_nuevo = new user({
        username: request.body.username,
        password: request.body.password,
    });
    user_nuevo.save();
    request.session.user = user_nuevo.username;
    response.status(300).redirect('/lab14/');
};

exports.get_index = (request, response, next) => {
    if (request.session.user) {
        response.render('index', {
            titulo: 'M1000R Ficha tecnica',
            users: user.fetchAll(),
            user: request.session.user || '',
        });
    } else {
        response.redirect('/lab14/login');
    }
};

exports.get_preguntas = (request, response, next) => {
    if (request.session.user) {
        response.render('preguntas', {
            titulo: 'Preguntas',
            users: user.fetchAll(),
            user: request.session.user || '',
        });
    } else {
        response.redirect('/lab14/login');
    }
};

exports.get_ordenar = (request, response, next) => {
    if (request.session.user) {
        response.render('ordenar', {
            titulo: 'Ordenar',
            users: user.fetchAll(),
            user: request.session.user || '',
        });
    } else {
        response.redirect('/lab14/login');
    }
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
        users: user.fetchAll(),
        user: request.session.user || '',
    });
    orden_nueva.save();
    response.status(300).redirect('/lab14/ordenes');
};

exports.get_ordenes = (request, response, next) => {
    if (request.session.user) {
        const cookies = request.get('Cookie') || '';
    let consultas = cookies.split('=')[2] || 0;
    consultas++;

    response.setHeader('Set-Cookie', 'consultas=' + consultas + '; HttpOnly');

    response.render('ordenes', {
        titulo: 'Ordenes',
        ordenes: orden.fetchAll(),
        users: user.fetchAll(),
        user: request.session.user || '',
    });
    } else {
        response.redirect('/lab14/login');
    }
};
