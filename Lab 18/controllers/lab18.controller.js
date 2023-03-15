const orden = require('../models/ordenes.model');
const user = require('../models/users.model');

exports.login = (request, response, next) => {
    user.fetchAll().then(([rows, fieldData]) => {
        response.render('login', {
            titulo: 'Login',
            users: rows,
            user: request.session.user || '',
        });
    }).catch(err => console.log(err));
}

exports.post_login = (request, response, next) => {
    const user_nuevo = new user({
        username: request.body.username,
        password: request.body.password,
    });
    user_nuevo.save();
    request.session.user = user_nuevo.username;
    response.status(300).redirect('/lab18/');
};

exports.get_index = (request, response, next) => {
    if (request.session.user) {
        response.render('index', {
            titulo: 'M1000R Ficha tecnica',
            user: request.session.user || '',
        });
    } else {
        response.redirect('/lab18/login');
    }
};

exports.get_preguntas = (request, response, next) => {
    if (request.session.user) {
        response.render('preguntas', {
            titulo: 'Preguntas',
            user: request.session.user || '',
        });
    } else {
        response.redirect('/lab18/login');
    }
};

exports.get_ordenar = (request, response, next) => {
    if (request.session.user) {
        response.render('ordenar', {
            titulo: 'Ordenar',
            user: request.session.user || '',
        });
    } else {
        response.redirect('/lab18/login');
    }
};

exports.post_ordenar = (request, response, next) => {
    const id = request.params.id || 0;
    if (request.session.user) {
        const orden_nueva = new orden({
            nombre: request.body.nombre,
            apellido: request.body.apellido,
            direccion: request.body.direccion,
            telefono: request.body.telefono,
            email: request.body.email,
            password: request.body.password,
            tarjeta: request.body.tarjeta,
            cvv: request.body.cvv,
            user: request.session.user || '',
        });
        orden_nueva.save(id);
        response.status(300).redirect('/lab18/ordenes');
    } else {
        response.redirect('/lab18/login');
    }
};

exports.get_ordenes = (request, response, next) => {
    const id = request.params.id || 0;
    if (request.session.user) {
        orden.fetch(id).then(([rows, fieldData]) => {
            console.log(rows);
            response.render('ordenes', {
                titulo: 'Ordenes',
                ordenes: rows,
                user: request.session.user || '',
            });
        }).catch(err => console.log(err));
    } else {
        response.redirect('/lab18/login');
    }
};

exports.get_modificar = (request, response, next) => {
    const id = request.params.id || 0;
    if (request.session.user) {
        orden.fetch(id).then(([rows, fieldData]) => {
            console.log(rows);
            response.render('modificar', {
                titulo: 'Modificar',
                ordenes: rows,
                orden: rows[0],
                user: request.session.user || '',
            });
        }).catch(err => console.log(err));
    } else {
        response.redirect('/lab18/login');
    }
};

exports.post_modificar = (request, response, next) => {
    const id = request.params.id || 0;
    if (request.session.user) {
        const orden_nueva = new orden({
            nombre: request.body.nombre,
            apellido: request.body.apellido,
            direccion: request.body.direccion,
            telefono: request.body.telefono,
            email: request.body.email,
            password: request.body.password,
            tarjeta: request.body.tarjeta,
            cvv: request.body.cvv,
            user: request.session.user || '',
        });
        orden_nueva.save(id);
        response.status(300).redirect('/lab18/ordenes');
    } else {
        response.redirect('/lab18/login');
    }
};